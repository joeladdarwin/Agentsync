import { Component, OnInit,  AfterViewInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], 
  providers:[ClientService, AuthService]
})
export class DashboardComponent implements OnInit, AfterViewInit  {
name:any;
message:any;
avisosTest :Observable<any>;
  constructor(private cli:ClientService,  public auth:AuthService) {
    // this.name=this.cli.getUsername();
  
   }
   query(){
     console.log("qury start");
     this.auth.clientqueryorderlen();
   }

   ngAfterViewInit(){
   
    this.avisosTest =this.auth.clientqueryorderlen();
   }
  ngOnInit() {
    // this.name = this.auth
   
  }

}
