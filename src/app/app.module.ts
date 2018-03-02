import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { CSVtoJSON } from './csv-to-json';
import { DataService } from './services/data/data.service';
import { D3Service, D3_DIRECTIVES } from './d3';

//Components
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ShowDataComponent } from './components/pages/show-data/show-data.component';

import { GraphComponent } from '././visuals/graph/graph.component';
import { SHARED_VISUALS } from '././visuals/shared';





@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    HomeComponent,
    ShowDataComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  
  ],
  providers: [CSVtoJSON, DataService, D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
