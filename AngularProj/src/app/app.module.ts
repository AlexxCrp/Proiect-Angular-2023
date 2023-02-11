import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DataviewComponent } from './dataview/dataview.component';
import { QuoteComponent } from './quote/quote.component';
import { FormsModule } from '@angular/forms';
import { StarWarsComponent } from './star-wars/star-wars.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'starwars',
    component: StarWarsComponent },
  { path: 'anime',
  component: QuoteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownComponent,
    DataviewComponent,
    QuoteComponent,
    StarWarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
