import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

//Componets
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FirstComponent } from './first/first.component';

//service
import { firstServiceJsonData } from './service/drinks_list';


const vijayroutes: Routes = [
  {path:'' , redirectTo :'link1', pathMatch:'full'},
  { path: 'link1', component: IndexComponent },
  { path: 'link2', component: FirstComponent }
];

@NgModule({
  declarations: [AppComponent,IndexComponent,FirstComponent],
  imports: [BrowserModule, HttpModule,  RouterModule.forRoot(vijayroutes) ],
  providers: [firstServiceJsonData],
  bootstrap: [AppComponent]
})





export class AppModule { }
