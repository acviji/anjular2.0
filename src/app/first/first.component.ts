import { Component,OnInit,ElementRef,Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Http } from '@angular/http';


import { firstServiceJsonData } from '../service/drinks_list';


declare var $:any;

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


   constructor(private _http: Http, private firstservicejsondata: firstServiceJsonData ) {}


  serviceResultList = [];
     firstServiceResults() {
        this.firstservicejsondata.firstService().subscribe(
            data => {
                this.serviceResultList = data;
                console.log(data);
            },
            error => console.log(error),
            () => console.log("Done")
        );
     }


    ngOnInit() {
      this.firstServiceResults();
    }

}
