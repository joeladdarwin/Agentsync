import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:any;
  email:any;  
  phone:any;
  profile:any;
  brokerage:any;
  phonenumber:number
  
  constructor(private cli: ClientService, private auth:AuthService) { }

  ngOnInit() {
    
  this.name=this.auth.displayName;
  this.email=this.auth.email;
  this.profile=this.auth.profile;
  this.brokerage=this.auth.brokerage  ;
  this.phonenumber=this.auth.phonenumber;
   
  }

}
