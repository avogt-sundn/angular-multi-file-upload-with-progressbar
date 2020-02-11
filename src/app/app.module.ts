import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UploadModule } from 'upload';
import { UploadService } from 'upload';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UploadModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
