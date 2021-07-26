import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';

export function cargarTradutorJSON(http: HttpClient){
  return new TranslateHttpLoader(http, '../assets/i18n/','.json');
  }

  
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide : TranslateLoader,
        useFactory: (cargarTradutorJSON),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
