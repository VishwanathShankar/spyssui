import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MediaComponent } from './media/media.component';
import { MainComponent } from './main/main.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
  },
  {
    path: 'home', component: MainComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'media', component: MediaComponent
  },
  {
    path: 'contact', component: ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
