import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filesData = [];
  selected;
  uploadedCount:number;
  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.uploadedCount = this.dataService.filesData.length;
      this.filesData = this.dataService.filesData;
      this.selected = this.filesData[0];
  }
  uploaded(data:Array<any>){
      this.dataService.filesData.push(data);
      this.uploadedCount = this.dataService.filesData.length; 
  }
  onFileChange(val:number) {
    this.selected = this.filesData[val];
 }


}
