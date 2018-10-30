import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pStyle: boolean = false;
  users: Object;

  constructor(private data: DataService) { }

  /**
   * Angular lifecycle hook, called when the component first loads up
   */
  ngOnInit() {
    this.data.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }

  clickMe() {
    this.pStyle = !this.pStyle;
  }
}
