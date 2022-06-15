import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artsy-search-results',
  templateUrl: './artsy-search-results.component.html',
  styleUrls: ['./artsy-search-results.component.scss']
})
export class ArtsySearchResultsComponent implements OnInit {
  @Input() artistSearchResults?: any;
  artistSearchArtworks:any
  artistSearchInfo:any
  constructor() { }

  ngOnInit(): void {
  }

 
}
