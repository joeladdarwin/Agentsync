import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

>>>>>>> 1c2f236e67ed34725fe050560ca4fdb31a8193a9
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
<<<<<<< HEAD
  providers: [ClientService]
=======
  providers:[ClientService]
>>>>>>> 1c2f236e67ed34725fe050560ca4fdb31a8193a9
})

export class RegisterComponent implements OnInit {

<<<<<<< HEAD
  constructor(private cli: ClientService) { }
=======
  constructor(private router: Router, private clientservice:ClientService) { }

onSubmit(registerform : NgForm){
 
  var name = registerform.controls['name'].value;
  var email = registerform.controls['email'].value;
  var brokerage = registerform.controls ['brokerage'].value;
  var phone = registerform.controls ['phone'].value;
  var password = "1sdsF89";
  this.clientservice.addUser(name,email,brokerage,phone,password);
  this.resetForm(registerform);
  this.router.navigateByUrl('/loginsent');

}
resetForm(registerform:NgForm){

  if(registerform!=null)
 
  registerform.reset();

}
>>>>>>> 1c2f236e67ed34725fe050560ca4fdb31a8193a9

  ngOnInit() {
  
  }

}
