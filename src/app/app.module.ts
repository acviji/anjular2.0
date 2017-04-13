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
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const myroutes: Routes = [
  { path:'' , redirectTo :'parent', pathMatch:'full'},
  { path: 'parent', component: IndexComponent },
  { path: 'child', component: FirstComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [AppComponent, IndexComponent, FirstComponent, AboutComponent, ContactComponent],
  imports: [BrowserModule, HttpModule,  RouterModule.forRoot(myroutes) ],
  providers: [firstServiceJsonData],
  bootstrap: [AppComponent]
})





export class AppModule { }
