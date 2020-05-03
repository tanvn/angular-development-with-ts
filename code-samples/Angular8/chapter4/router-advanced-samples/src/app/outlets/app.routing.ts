import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ChatComponent} from "./chat.component";
import {Chat2Component} from "./chat2.component";


const routes: Routes = [
  {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'chat', component: ChatComponent, outlet:"sub"},
  {path: 'chat2', component: Chat2Component, outlet:"sub2"}

];

export const routing = RouterModule.forRoot(routes);
