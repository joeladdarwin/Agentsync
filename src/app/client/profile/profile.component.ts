import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
 
})
export class ProfileComponent implements OnInit, AfterViewInit {
  name: any;
  email: any;
  phone: any;
  profile: any;
  brokerage: any;
  phonenumber: number
  pro:any;
  title;
  userid:any;
  constructor(private cli: ClientService, public auth: AuthService) { }
  ngAfterViewInit(){
    this.name = this.auth.displayName;
    this.email = this.auth.email;
    this.profile = this.auth.users$;
    this.userid = this.auth.currentUserId;
    console.log("darwin"+this.userid);
    
  }
  ngOnInit() {

   

    
  }

}