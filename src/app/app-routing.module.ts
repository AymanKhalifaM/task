import { AboutComponent } from './components/about/about.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'programs',pathMatch:'full'},
  {path:'programs',component:ProgramsComponent},
  {path:'schools',component:SchoolsComponent},
  {path:'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
