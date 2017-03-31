import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componets
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FirstComponent } from './first/first.component';

//service



const vijayroutes: Routes = [
  {path:'' , redirectTo :'link2', pathMatch:'full'},
  { path: 'link1', component: IndexComponent },
  { path: 'link2', component: FirstComponent }
];

@NgModule({
  declarations: [AppComponent,IndexComponent,FirstComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(vijayroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})





export class AppModule { }
