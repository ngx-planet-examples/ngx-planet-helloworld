import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPlanetModule } from '@worktile/planet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowMFEBorderComponent } from './show-mfeborder/show-mfeborder.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowMFEBorderComponent
  ],
  imports: [
    BrowserModule,
    NgxPlanetModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
