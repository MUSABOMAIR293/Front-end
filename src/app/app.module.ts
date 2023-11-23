import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { MusicToolsListComponent } from './component/music-tools-list/music-tools-list.component';
import { ReqiustComponent } from './component/reqiust/reqiust.component';
import { NotFound404Component } from './component/not-found404/not-found404.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { DeletComponent } from './component/delet/delet.component';
import { ProfileComponent } from './component/profile/profile.component';
import { DashBordComponent } from './component/dash-bord/dash-bord.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    SignupComponent,
    MusicToolsListComponent,
    ReqiustComponent,
    NotFound404Component,
    ContactusComponent,
    DeletComponent,
    ProfileComponent,
    DashBordComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
