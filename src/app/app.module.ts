import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './main/home/home.component';
import {FooterComponent} from './main/footer/footer.component';
import {HeaderComponent} from './main/header/header.component';
import {MainComponent} from './main/main.component';
import {AdminComponent} from './admin/admin.component';

import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from './main/profile/profile.component';
import {LoginComponent} from './main/profile/login/login.component';
import {SignupComponent} from './main/profile/signup/signup.component';
import { MobileVerificationComponent } from './main/profile/signup/mobile-verification/mobile-verification.component';

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
    SignupComponent,
    MobileVerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent, MobileVerificationComponent]
})
export class AppModule {
}
