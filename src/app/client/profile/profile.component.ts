import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

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
  user;
  userid:any;
  constructor(private cli: ClientService, public auth: AuthService, public afauth:AngularFireAuth) { }
  ngAfterViewInit(){
    this.name = this.auth.displayName;
    this.email = this.auth.email;
    this.profile = this.auth.users$;
    this.userid = this.afauth.auth.currentUser.uid; 
    console.log("darwin"+this.userid);
    console.log(this.user + "is the uid")
  }
  ngOnInit() {
   
    this.auth.users$.subscribe(user => this.user = user)
  }

}