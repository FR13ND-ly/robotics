import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrfShellModule } from './drf/feature/drf-shell/drf-shell.module';
import { LandingPageShellModule } from './landing-page/feature/landing-page-shell/landing-page-shell.module';
import { InfoComponent } from './landing-page/ui/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageShellModule,
    DrfShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
