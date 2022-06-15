import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtsyArtistService {

  constructor(private httpClient: HttpClient) { }

  searchArtists(query: string) {
    return this.httpClient.get(`${environment.artsy.url}${environment.artsy.searchArtist}?query=${query}`)
  }

  getArtistByArtistId(ArtistId: string) {
    return this.httpClient.get(`${environment.artsy.url}${environment.artsy.getArtistById}${ArtistId}`)
  }

  getArtistArtworkByArtistId(ArtistId: string) {
    return this.httpClient.get(`${environment.artsy.url}${environment.artsy.getArtistArtwork}${ArtistId}`)
  }

  getGenesByArtworkId(ArtworkId: string) {
    return this.httpClient.get(`${environment.artsy.url}${environment.artsy.getArtworkGenes}${ArtworkId}`)
  }
}
