import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ArtsyArtistService } from '../artsy-artist/artsy-artist.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-artsy-artist-artwork-genes',
  templateUrl: './artsy-artist-artwork-genes.component.html',
  styleUrls: ['./artsy-artist-artwork-genes.component.scss']
})
export class ArtsyArtistArtworkGenesComponent implements OnInit, OnChanges {
  @Input() seletectedArtwork?: any;
  loader=false
  artistGenes:any
  constructor(private artsyArtistService: ArtsyArtistService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(this.seletectedArtwork?.id){
        this.artistGenes=null
        this.loader=true
        this.artsyArtistService.getGenesByArtworkId(this.seletectedArtwork?.id).pipe(
          map(((genesResponse: any) => genesResponse['_embedded']['genes'])),
          tap((genesResponse)=>this.artistGenes=genesResponse),
          tap(()=>this.loader=false)
        ).subscribe()
      }
  }

}
