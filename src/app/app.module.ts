import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtsyFooterComponent } from './artsy-footer/artsy-footer.component';
import { ArtsyHeaderComponent } from './artsy-header/artsy-header.component';
import { ArtsySearchComponent } from './artsy-search/artsy-search.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { ArtsySearchResultsComponent } from './artsy-search-results/artsy-search-results.component';
import { ArtsySearchSpaceComponent } from './artsy-search-space/artsy-search-space.component';
import { ArtsySearchArtistInfoComponent } from './artsy-search-artist-info/artsy-search-artist-info.component';
import { ArtsySearchArtistArtworksComponent } from './artsy-search-artist-artworks/artsy-search-artist-artworks.component';
import { ArtsyArtistArtworkGenesComponent } from './artsy-artist-artwork-genes/artsy-artist-artwork-genes.component';
@NgModule({
  declarations: [
    AppComponent,
    ArtsyFooterComponent,
    ArtsyHeaderComponent,
    ArtsySearchComponent,
    ArtsySearchResultsComponent,
    ArtsySearchSpaceComponent,
    ArtsySearchArtistInfoComponent,
    ArtsySearchArtistArtworksComponent,
    ArtsyArtistArtworkGenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents:[ArtsyArtistArtworkGenesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
