import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
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
user;
  constructor(private cli: ClientService, public auth: AuthService) { }
  ngAfterViewInit(){
    this.name = this.auth.displayName;
    this.email = this.auth.email;
    this.profile = this.auth.users$;
    
 

  }
  ngOnInit() {

    this.auth.users$.subscribe(user=>this.user =user)
 console.log(this.user.uid);
    
  }

}