import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService, ClientService]
})
export class LoginComponent implements OnInit {
  error:any=null;
  constructor(private cli:ClientService, private auth:AuthService) { }
  login(email,password)
  {
    this.cli.clientlogin(email, password)
    this.error = this.cli.clientlogin(email, password)
  }
  ngOnInit() {
  }

}
