import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], 
  providers:[ClientService]
})
export class DashboardComponent implements OnInit {
name:any;
message:any;
  constructor(private cli:ClientService, private router:Router, private auth:AuthService) {
    this.name=this.cli.getUsername();
  
   }

  ngOnInit() {

  }

}
