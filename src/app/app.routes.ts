import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfoiloComponent } from '../portfoilo/portfoilo.component';

export const routes: Routes = [
  {path : "" , redirectTo : "home" , pathMatch : "full"} ,
  {path : "home" , component : HomeComponent , title : "Home"} ,
  {path : "about" , component : AboutComponent , title : "About"} ,
  {path : "contact" , component : ContactComponent , title : "Contact"} ,
  {path : "portfoilo" , component : PortfoiloComponent , title : "Portfolio"} ,
  {path : "**" , component : NotfoundComponent , title : "404"} ,
];
