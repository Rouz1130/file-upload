import { Component, ElementRef, OnInit } from '@angular/core';
import * as D3 from 'd3/Index';
import { Node, Link } from './d3';
import { CSVtoJSON } from './csv-to-json';
import APP_CONFIG from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nodes: Node[] = [];
  links: Link[] = [];

    
  constructor() {
    const N = APP_CONFIG.N,
          getIndex = number => number - 1;


          for (let i = 1; i <= N; i++) {
            this.nodes.push(new Node(i));
          }
      

          for (let i = 1; i <= N; i++) {
            for (let m = 2; i * m <= N; m++) {
              /** increasing connections toll on connecting nodes */
              this.nodes[getIndex(i)].linkCount++;
              this.nodes[getIndex(i * m)].linkCount++;
      
              /** connecting the nodes before starting the simulation */
              this.links.push(new Link(i, i * m));
            }
          }
        }
      }