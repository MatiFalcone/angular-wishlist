import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelDestinyComponent } from './travel-destiny/travel-destiny.component';
import { DestinyListComponent } from './destiny-list/destiny-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelDestinyComponent,
    DestinyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
