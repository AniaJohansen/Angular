import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';


@NgModule({
  declarations: [AppComponent,ProductListComponent],//dette er modulene vi selv setter opp
  imports: [BrowserModule, FormsModule], //dette er modulene fra 3rdparties
  bootstrap: [AppComponent]
})
export class AppModule { }
