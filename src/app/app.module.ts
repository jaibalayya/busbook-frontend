import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/header/header.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import {ProfileComponent} from './main/home/profile/profile.component';
import {LoginComponent} from './main/home/profile/login/login.component';
import {SignupComponent} from './main/home/profile/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    AdminComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
