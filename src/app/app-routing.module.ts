import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './main/home/home.component';
import {ProfileComponent} from './main/profile/profile.component';
import {LoginComponent} from './main/profile/login/login.component';
import {SignupComponent} from './main/profile/signup/signup.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
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
