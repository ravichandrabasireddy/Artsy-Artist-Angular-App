import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { map, switchMap, tap } from 'rxjs';

import { ArtsyArtistService } from '../artsy-artist/artsy-artist.service';

@Component({
  selector: 'app-artsy-search-space',
  templateUrl: './artsy-search-space.component.html',
  styleUrls: ['./artsy-search-space.component.scss']
})
export class ArtsySearchSpaceComponent implements OnInit,OnChanges {
  loader=false
  toggle:boolean[]=[]
  @Input() artistSearchResult?: any;
  @Output() artistInfo = new EventEmitter<any>();
  @Output() artistArtworks = new EventEmitter<any>();
  constructor(private artsyArtistService: ArtsyArtistService) { }

  ngOnInit(): void {
    this.toggle=[]
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes){
      this.toggle=[]
      this.artistInfo.emit(null)
      this.artistArtworks.emit(null)
      this.artistSearchResult.map((artist:any)=>{
        this.toggle.push(false)
      })
    }
  }

  getDetails(artist:any,index:number){
    this.artistInfo.emit(null)
    this.artistArtworks.emit(null)
    this.loader=true
    this.toggle =this.toggle.map((value)=>value=false)
    this.toggle[index]=true
    let artistUrl=artist['_links']['self']['href'].split('/')
    let artistId=artistUrl.pop()
    this.artsyArtistService.getArtistByArtistId(artistId)
    .pipe(
      tap((artistInfo)=>this.artistInfo.emit(artistInfo)),
      switchMap((artistArtworks)=>this.artsyArtistService.getArtistArtworkByArtistId(artistId)),
      map((artistArtworks:any)=>artistArtworks["_embedded"]["artworks"]),
      tap((artistArtworks)=>this.artistArtworks.emit(artistArtworks)),
    ).subscribe(
      ()=>this.loader=false
    )
  }

}
