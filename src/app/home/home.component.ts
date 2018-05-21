import {AfterViewInit, Component, OnInit} from '@angular/core';
//import {$} from "protractor";

/*
import * as $ from 'jquery';
*/
declare function satya():any;
declare function demo():any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,  AfterViewInit  {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    satya();

  }

}
