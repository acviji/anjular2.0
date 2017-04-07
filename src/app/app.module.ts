import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

//Componets
import { AppComponent } from './app.component';
import { IndexComponent } from './home/index.component';
import { FirstComponent } from './about/first.component';

//service
import { firstServiceJsonData } from './service/drinks_list';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';


const vijayroutes: Routes = [
  {path:'' , redirectTo :'link1', pathMatch:'full'},
  { path: 'home', component: IndexComponent },
  { path: 'about', component: FirstComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'product', component: ProductComponent },
  { path: 'contact-us', component: ContactComponent }
  
];

@NgModule({
  declarations: [AppComponent,IndexComponent,FirstComponent, ProductComponent, ServicesComponent, ContactComponent],
  imports: [BrowserModule, HttpModule,  RouterModule.forRoot(vijayroutes) ],
  providers: [firstServiceJsonData],
  bootstrap: [AppComponent]
})





export class AppModule { }
