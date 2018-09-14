import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { User } from '../../shared/user';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[ClientService, AuthService]
})
export class RegisterComponent implements OnInit {

  constructor(private cli: ClientService, private aut: AuthService) { }
  register(registerForm:User)
  {
   
    this.aut.register(registerForm)
  }
  ngOnInit() {
  }

}
