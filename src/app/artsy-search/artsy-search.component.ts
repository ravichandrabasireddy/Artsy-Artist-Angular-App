import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap, map } from 'rxjs/operators';
import { ArtsyArtistService } from '../artsy-artist/artsy-artist.service';


export class ArtsrySearch{
  artistData?:Object[];
  clearResults?:boolean;
}

@Component({
  selector: 'app-artsy-search',
  templateUrl: './artsy-search.component.html',
  styleUrls: ['./artsy-search.component.scss']
})
export class ArtsySearchComponent implements OnInit {
  searching = false
  searchDisabled = true
  @Output() searchResults = new EventEmitter<ArtsrySearch>();
  artistSearch = new FormGroup({
    search: new FormControl("", [Validators.required]),
  })
  constructor(private artsyArtistService: ArtsyArtistService) { }

  ngOnInit(): void {
    this.artistSearch.get('search')?.valueChanges.subscribe((value) => {
      if (value === null || value === undefined || value === '') {
        this.searchDisabled = true
      } else {
        this.searchDisabled = false
      }
    })
  }

  onEnter(): void{
    let searchValue = this.artistSearch.get('search')?.value
    if(searchValue){
      this.searchArtist()
    }
  }

  searchArtist(): void {
    this.searching = true
    let searchValue = this.artistSearch.get('search')?.value
    this.artsyArtistService.searchArtists(searchValue ? searchValue : "")
      .pipe(
        map((response: any) => response["_embedded"]["results"]),
        map(filteredResponse => filteredResponse.filter(((artist: any) => artist["og_type"] === 'artist'))),
        
      ).subscribe((artistData) => {
        artistData.map((artist:any)=>{
          if(artist["_links"]["thumbnail"]["href"]==='/assets/shared/missing_image.png'){
            artist["_links"]["thumbnail"]["href"]='/assets/artsy_logo.svg'
          }
        })
        this.searchResults.emit({artistData:artistData,clearResults:false})
        this.searching = false
      })
  }

  clearSearch(): void {
    this.artistSearch.get('search')?.setValue('')
    this.searchResults.emit({artistData:[],clearResults:true})
    this.searchDisabled = true
  }

}
