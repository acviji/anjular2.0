import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

constructor(public app: AppComponent) {}
  sample:any = 'Sample Data form main component'; 
  sample1:any = 'Sample Data form main component second variable'; 
  fontSize: any = '35px';
  color: any = '#000';
  ngOnInit() {
  }

}
