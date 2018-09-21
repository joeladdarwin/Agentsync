import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { User } from '../../shared/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[ClientService]
})
export class RegisterComponent implements OnInit {
  error: any = null;
  constructor(private cli: ClientService, private route:Router) { }
  register(registerForm:User)
  {
   this.cli.register(registerForm).then(this.route.navigate(['/thanks']))
    this.error = this.cli.register(registerForm)
  }
  ngOnInit() {
    
  }

}
