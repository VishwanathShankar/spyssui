import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MediaComponent } from './media/media.component';
import { MainComponent } from './main/main.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { FindBranchComponent } from './find-branch/find-branch.component';
import { OurbranchesComponent } from './ourbranches/ourbranches.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'media', component: MediaComponent
  },
  {
    path: 'contact', component: ContactusComponent
  },
  {
    path: 'UpcomingEvents', component: EventsComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'findBranch', component: FindBranchComponent
  },
  {
    path: 'Branches-list', component: OurbranchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
