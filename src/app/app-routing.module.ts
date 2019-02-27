import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NSMComponent} from './nsm/nsm.component';
import {RSMComponent} from './rsm/rsm.component';

const routes: Routes = [
  {
    path: 'nsm', component: NSMComponent
  },
  {
    path: 'rsm', component: RSMComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
