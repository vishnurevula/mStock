import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarHomeService {

  isLoginVisible : boolean;
  isLogoutVisible : boolean;
  isWatchListVisible : boolean;
  isCompPerfVisible : boolean;

  constructor() { 
    this.isLoginVisible= true;
    this.isLogoutVisible= false;
    this.isWatchListVisible =false;
    this.isCompPerfVisible = false;
  }

  hideLogin() { this.isLoginVisible = false; }
  hideLogout() { this.isLoginVisible = false; }
  hideWatchList(){ this.isWatchListVisible = true; }
  hideCompPerf(){ this.isCompPerfVisible = true; }
  
  showLogin() { this.isLoginVisible = true; }
  showLogout() { this.isLogoutVisible = true; }
  showWatchList(){ this.isWatchListVisible = true; }
  showCompPerf(){ this.isCompPerfVisible = true; }
  // toggle() { this.visible = !this.visible; }
}
