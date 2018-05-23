import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './main/home/home.component';
import {ProfileComponent} from './main/home/profile/profile.component';
import {LoginComponent} from './main/home/profile/login/login.component';
import {SignupComponent} from './main/home/profile/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {path: 'login', component: ProfileComponent, children: [{path: '', component: LoginComponent}]},
  {path: 'register', component: ProfileComponent, children: [{path: '', component: SignupComponent}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
