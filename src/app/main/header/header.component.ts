import {AfterViewInit, Component, OnInit} from '@angular/core';

declare function satya():any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,   AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    satya();
  }

}
