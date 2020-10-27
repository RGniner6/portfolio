import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ProjectDetailsComponent} from './components/project-details/project-details.component';


const routes: Routes = [
  { path: '', component: PortfolioComponent, data: {animation: 'isLeft'} },
  { path: 'project/:projectId', component: ProjectDetailsComponent, data: {animation: 'isRight'} },
  { path: 'PROJECT/:projectId', component: ProjectDetailsComponent, data: {animation: 'isRight'} },
  { path: '**', redirectTo: '', component: PortfolioComponent, data: {animation: 'isLeft'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
