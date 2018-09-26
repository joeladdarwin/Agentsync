import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], 
  providers:[ClientService, AuthService]
})
export class DashboardComponent implements OnInit {
name:any;
message:any;
  constructor(private cli:ClientService,  private auth:AuthService) {
    this.name=this.auth.getinfox();
  
   }

  ngOnInit() {
    this.name = this.auth.getinfox();

  }

}
