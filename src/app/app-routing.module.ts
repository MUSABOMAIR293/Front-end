import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AuthGuardService } from './services/auth-gruard.service';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { MusicToolsListComponent } from './component/music-tools-list/music-tools-list.component';
import { NotFound404Component } from './component/not-found404/not-found404.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { ProfileComponent } from './component/profile/profile.component';
import { DashBordComponent } from './component/dash-bord/dash-bord.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: HomeComponent
  },
  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path:'MusicToosList',
    canActivate: [AuthGuardService],
    component:MusicToolsListComponent
  },
  {
    path:'concut',
    canActivate: [AuthGuardService],
    component:ContactusComponent

  },
  {
    path:'profile',
    canActivate: [AuthGuardService],
    component:ProfileComponent
  },{
    path:'DashBord',
    canActivate: [AuthGuardService],
    component:DashBordComponent

  }
  ,{
    path:'**',
    component:NotFound404Component

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
