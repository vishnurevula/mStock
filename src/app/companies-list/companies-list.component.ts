import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../Services/company.service';
import { CompanyDetails } from '../Types/CompanyDetails';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companiesList: CompanyDetails[] = [];

  constructor(private service : CompanyService) { }

  ngOnInit() {
    this.service.getCompanies().subscribe(
      data =>{
        this.companiesList = <CompanyDetails []> data;
        console.log(data);
        console.log("data at 0 : "+this.companiesList)
      }
    )
  }

}
