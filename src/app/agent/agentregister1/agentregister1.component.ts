import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { ClientService } from '../../shared/client.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';  
import { Router } from '@angular/router';
@Component({
  selector: 'app-agentregister1',
  templateUrl: './agentregister1.component.html',
  styleUrls: ['./agentregister1.component.css'],
  providers:[ClientService]
})
export class Agentregister1Component  {
  regiForm: FormGroup;  
  FirstName:string='';  
  City:string='';  
  Street:string='';  
  DOB:Date=null;  
  Gender:string='';  
  Blog:string='';  
  Email:string='';  
  Zipcode:string='';
  IsAccepted:number=0;  
  skillsList: string[] = ['Photography', 'Video Tour', '360 Tour', 'Single Property Website', 'Floor Plans(B&W)', 'Floor Plans(Color)', 'Floor Plans(Color+Furniture)', 'Double Sided Flyer', 'Brochure(8 Page)', 'Brochure(4 Page)'];

  constructor(private fb: FormBuilder,private cli:ClientService, private router:Router) {   
  
  
    // To initialize FormGroup  
    this.regiForm = fb.group({  
      'FirstName' : [null, Validators.required],  
       
      'Street' : [null, Validators.required],
      'DOB' : [null, Validators.required],  
      'Gender':[null, Validators.required],  
      'skills':[null, Validators.required],  
      'Email':[null, Validators.compose([Validators.required,Validators.email])],  
     
      'State': [null, Validators.required],
      'City': [null, Validators.required],
      'Zipcode': [null, Validators.required],
      'IsAccepted':[null]  
    });  
  
  }  
  
  // On Change event of Toggle Button  
  onChange(event:any)  
  {  
    if (event.checked == true) {  
      this.IsAccepted = 1;  
    } else {  
      this.IsAccepted = 0;  
    }  
  }  
  
  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
  }  

}
