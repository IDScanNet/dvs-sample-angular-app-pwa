import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebLibraryComponent } from './web-library/web-library.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'web-library', component: WebLibraryComponent },
  { path: '*', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
