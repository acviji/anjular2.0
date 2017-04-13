import { Component, OnInit, Input } from '@angular/core';
import { firstServiceJsonData } from '../service/drinks_list';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent  {
constructor(private firstservicejsondata: firstServiceJsonData ) {}

isTrue:boolean = true;
@Input() getData:any;
@Input() getData1:any;

//User Details from Service Url
  userserviceResultList = [];
  userServiceResults() {
    this.firstservicejsondata.userService().subscribe(
        data => {
            this.userserviceResultList = data;
           // console.log(data);
        },
        error => console.log(error),
        () => console.log("Done")
    );
  }

//Post Details from Service Url
  postserviceResultList = [];
  postServiceResults() {
    this.firstservicejsondata.postService().subscribe(
        data => {
            this.postserviceResultList = data;
             this.filterById(this.postserviceResultList);
             console.log(data);
        },
        error => console.log(error),
        () => console.log("Done")
    );
  }

  postserviceResultfilterList = [];
  filterById(obj){
      var items = obj;
      for(var i = 0; i < items.length; i++){
        this.postserviceResultfilterList.push(items[i].userId);
      }
      return this.postserviceResultfilterList;
      
  }

// Get values from input and bind in HTML 
  inputValue:any = 'Default Text';
   getText(myvalue){
    this.inputValue = myvalue;
   }

    ngOnInit() {
      this.userServiceResults();
      this.postServiceResults();
    }
   

}
