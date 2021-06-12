import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth-service.service';
import { NavBarHomeService } from '../Services/nav-service.service';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public nav: NavBarHomeService, 
              private router: Router,
              public authenticateServ : AuthService) { }

  ngOnInit(): void {
  }
  
  OnClick(){
    this.authenticateServ.logout();
    this.router.navigate(['/loginComponent']);

  }

}
