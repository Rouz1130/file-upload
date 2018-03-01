import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { CSVtoJSON } from './csv-to-json';
import { DataService } from './services/data/data.service';


import { FileUploadComponent } from './components/file-upload/file-upload.component';




@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [CSVtoJSON,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
