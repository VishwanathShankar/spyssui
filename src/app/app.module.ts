import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MediaComponent } from './media/media.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './material.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MapComponent } from './map/map.component';
import { MainComponent } from './main/main.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { FindBranchComponent } from './find-branch/find-branch.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { OurbranchesComponent } from './ourbranches/ourbranches.component';
import { ConstantService } from './constant.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MediaComponent,
    AboutComponent,
    ContactComponent,
    MapComponent,
    MainComponent,
    ContactusComponent,
    EventsComponent,
    RegisterComponent,
    FindBranchComponent,
    OurbranchesComponent,
    SearchBranchComponent
  ],
  imports: [
    MatModule,
    ScrollingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [ConstantService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
