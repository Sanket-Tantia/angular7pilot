import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pStyle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  clickMe() {
    this.pStyle = !this.pStyle;
  }
}
