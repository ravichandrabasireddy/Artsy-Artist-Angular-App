import { Component } from '@angular/core';
import { ArtsrySearch } from './artsy-search/artsy-search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchResults:any=[]
  noResults:any=true
  constructor() { }

  public getToken(){
  }

  getResults($event:ArtsrySearch){
    this.searchResults=$event.artistData
    this.noResults=$event.clearResults
  }
}
