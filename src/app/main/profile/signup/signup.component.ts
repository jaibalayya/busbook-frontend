import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {MobileVerificationComponent} from './mobile-verification/mobile-verification.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name: string;
  password: string;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(public dialog: MatDialog) {
  }

  proceedRegistraion(): void {
    const dialogRef = this.dialog.open(MobileVerificationComponent, {
      width: '368px',
      height: '400px',
      data: {name: this.name, password: this.password}
      }
    );
  }

  ngOnInit() {
  }

}
