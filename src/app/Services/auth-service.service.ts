import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginDetails } from '../Types/Logindetails';
import { NavBarHomeService } from './nav-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn : boolean = false;

  userId : number = 0;

  private readonly url = 'http://localhost:3000';

  private currentUserSubject: BehaviorSubject<LoginDetails>;
  public currentUser: Observable<LoginDetails>;

  constructor(
              private http: HttpClient,
              private router: Router,
              private navServ: NavBarHomeService
              ) {
    this.currentUserSubject = new BehaviorSubject<LoginDetails>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): LoginDetails {
      return this.currentUserSubject.value;
  }

  validate(email: string, password: string): Observable<LoginDetails> {
      return this.http.post<LoginDetails>(this.url+`/users/`, { email, password })
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              console.log("Logged in with email: "+user.email);
              // console.log("response data access Value: "+this.currentUserSubject.value);
              this.isLoggedIn = true;
              console.log("isLoggedStatus: " +this.isLoggedIn);
              return user;
          }))
          
          ;
  }

  setAuthenticated(id: number){
    return this.userId;

  }
  isAuthenticated() : boolean{
    this.router.navigate(['/companiesList']);
    // this.navServ.showCompPerf();
    // this.navServ.showLogout();
    // this.navServ.showWatchList();
     return this.isLoggedIn;
  }
  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null!);
  }

}