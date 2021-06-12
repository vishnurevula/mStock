import { Component, OnInit } from '@angular/core';
import { NavBarHomeService } from '../Services/nav-service.service';

@Component({
  selector: 'app-navigation-home',
  templateUrl: './navigation-home.component.html',
  styleUrls: ['./navigation-home.component.css']
})
export class NavigationHomeComponent implements OnInit {

  constructor( public nav: NavBarHomeService ) {}

  ngOnInit(): void {
  }

}
