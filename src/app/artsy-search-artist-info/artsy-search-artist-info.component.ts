import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artsy-search-artist-info',
  templateUrl: './artsy-search-artist-info.component.html',
  styleUrls: ['./artsy-search-artist-info.component.scss']
})
export class ArtsySearchArtistInfoComponent implements OnInit {
  @Input() artistInfo?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
