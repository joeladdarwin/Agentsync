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
data:any;
uid:string;
  constructor(private cli:ClientService, private auth:AuthService) { }

  ngOnInit() {
this.uid = this.auth.currentUserId();
console.log("thisuid"+this.uid);
this.data = this.auth.getuserdata(this.uid)

  }

}
