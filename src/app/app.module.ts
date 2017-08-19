import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EatstreetApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB5okvT_FG43W3in_-_Ag_bvN6idQYvjFw'
    })
  ],
  providers: [EatstreetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
