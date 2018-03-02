import { Component, ElementRef, OnInit } from '@angular/core';
import * as D3 from 'd3/Index';
import { CSVtoJSON } from './csv-to-json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  errorMessage: string;
  host;
  svg;
    
  constructor(private _element: ElementRef) {
    this.host = D3.select(this._element.nativeElement);
  }

  ngOnInit() {
    this.buildSVG();
  }

  buildSVG() {
    this.host.html('');
    this.svg = this.host.append('svg')
      .attr('width', '600')
      .attr('height', '400')
      .style('background-color', 'blue');
  }


}
