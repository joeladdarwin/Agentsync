import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../../shared/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ ClientService]
})
export class LoginComponent implements OnInit {
  error: { name: string, message: string } = { name: '', message: '' };
  loginform:NgForm;
  constructor(private cli:ClientService) { }
  login(loginform)
  {
    var email =loginform.controls['email'].value;
    var password = loginform.controls['password'].value;
    this.cli.clientlogin(email, password).catch(_error => {
      this.error = _error;
      this.resetForm()
      return this.error
    })
   
  }
  resetForm(loginform?: NgForm) {
    if (loginform != null)
      loginform.reset();
  }
  ngOnInit() {
    this.resetForm()
  }

}
