import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  @Output() uploaded = new EventEmitter<any>();
  filesData = [];
  selected;
  constructor(private dataService: DataService) { }

  ngOnInit() {
     this.filesData = this.dataService.filesData;
     this.selected = this.filesData[0];
  }
     
  onFileChange(val:number) {
     this.selected = this.filesData[val];
  }
}
