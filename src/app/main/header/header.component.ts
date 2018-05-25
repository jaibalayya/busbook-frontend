import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProfileComponent} from '../profile/profile.component';
import {MatDialog} from '@angular/material';


declare function satya(): any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(public  dialog: MatDialog) {
  }

  name: string;
  animal: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '368px',
      height: '400px',

    });
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    satya();
  }

}
