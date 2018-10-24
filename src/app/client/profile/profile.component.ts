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

  constructor(private cli: ClientService, private auth: AuthService) { }
  ngAfterViewInit(){
    this.name = this.auth.displayName;
    this.email = this.auth.email;
   this.profile = this.auth.data$;
    
    console.log(this.profile);
    console.log("is the profile")


  }
  ngOnInit() {

   

    
  }

}