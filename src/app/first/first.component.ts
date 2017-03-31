import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FirstService } from '../service/drinks_list';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }
  

  ngOnInit() {
    //this.firstService
  }

}
