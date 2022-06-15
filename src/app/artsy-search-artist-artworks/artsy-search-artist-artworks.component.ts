import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artsy-search-artist-artworks',
  templateUrl: './artsy-search-artist-artworks.component.html',
  styleUrls: ['./artsy-search-artist-artworks.component.scss']
})
export class ArtsySearchArtistArtworksComponent implements OnInit {
  @Input() artistArtworks?: any;
  constructor() { }
  seletectedArtistArtwork:any
  ngOnInit(): void {
  }

  getCategories(artwork:any){
   this.seletectedArtistArtwork=artwork
  }

}
