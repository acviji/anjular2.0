import { Component,OnInit,ElementRef,Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { firstServiceJsonData } from '../service/drinks_list';


declare var $:any;
//[style.color]
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


 constructor(private firstservicejsondata: firstServiceJsonData ) {}


  userserviceResultList = [];
  userServiceResults() {
    this.firstservicejsondata.userService().subscribe(
        data => {
            this.userserviceResultList = data;
            console.log(data);
        },
        error => console.log(error),
        () => console.log("Done")
    );
  }

  postserviceResultList = [];
  postServiceResults() {
    this.firstservicejsondata.postService().subscribe(
        data => {
            this.postserviceResultList = data;
            console.log(data);
        },
        error => console.log(error),
        () => console.log("Done")
    );
  }

   userIDResultList = [];
  userIDResult() {
    this.firstservicejsondata.postService().subscribe(
        data => {
            this.userIDResultList = data;
            console.log(data);
        },
        error => console.log(error),
        () => console.log("Done")
    );
  }

   inputValue:any = 'Default Text';
   getText(myvalue){
    this.inputValue = myvalue;
   }

    ngOnInit() {
      this.userServiceResults();
      this.postServiceResults();
      this.userIDResult();
    }

}
