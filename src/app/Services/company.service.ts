import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyDetails } from '../Types/CompanyDetails';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly url = 'http://localhost:3000/companies';

  constructor(private httpClient: HttpClient) { }

  getCompanies(): Observable<any> {
    console.log('Request is sent!');
    return this.httpClient.get<any>(this.url);

  }
}
