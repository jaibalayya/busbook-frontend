import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './profile/login/login.component';
import {SignupComponent} from './profile/signup/signup.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  /*{
    path: 'login', component: ProfileComponent,
    children: [{path: '', component: LoginComponent}]
  },
  {
    path: 'signup', component: ProfileComponent,
    children: [{path: '', component: SignupComponent}]
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
