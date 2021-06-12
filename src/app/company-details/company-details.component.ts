import { Component, Input, OnInit } from '@angular/core';
import { CompanyService } from '../Services/company.service';
import { CompanyDetails } from '../Types/CompanyDetails';
// import {plainToClass} from "class-transformer";


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  @Input() companyObj : CompanyDetails;

  constructor() { }

  ngOnInit() {  }

  // companiesList: CompanyDetails[] = [];

  // constructor(private service : CompanyService) { }
  // ngOnInit() {
  //   this.service.getCompanies().subscribe(
  //     data =>{
  //       this.companiesList = <CompanyDetails []> data;
  //       console.log(data);
  //       console.log("data at 0 : "+this.companiesList)
  //     }
  //   )
  // }

}
