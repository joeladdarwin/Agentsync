import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { ClientService } from '../../shared/client.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
 
  myform: FormGroup;
  street1: FormControl;
  state: FormControl;
 
  password: FormControl;
 
  addressstore:any;
constructor(private street : ClientService){

}
  createFormControls() {
    this.street1 = new FormControl("", Validators.required);
    this.state = new FormControl("", Validators.required);
  
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]);
    
    
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.street1,
        lastName: this.state
      }),
    
      password: this.password,
     
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    console.log("engtr");
    if (this.myform.valid) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
    this.addressstore = this.street.address(this.myform.value);
    console.log(this.addressstore);
      this.myform.reset();
      
    }
  }
}
