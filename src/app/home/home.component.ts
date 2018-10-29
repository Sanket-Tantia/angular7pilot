import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pStyle: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  clickMe() {
    this.pStyle = !this.pStyle;
    this.data.clickMe();
  }
}
