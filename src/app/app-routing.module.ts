import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from 'localize-router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule' },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes)
  ],
  exports: [ RouterModule, LocalizeRouterModule ]
})
export class AppRoutingModule {}
