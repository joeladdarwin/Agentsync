import { Component, OnInit } from '@angular/core';
import {
 
  
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { ClientService } from '../../shared/client.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  
})
export class AddressComponent implements OnInit {
  propertyss:string;
 propertytype:string;
 address:Object;
 street:string;
 isAppartment:boolean;
 addressformgroup: FormGroup;
constructor(private cli : ClientService, private _formbuilder : FormBuilder){
this.isAppartment = false;
// this.propertytype = "Appartment"

}
  get af() { return this.addressformgroup.controls; }
    
    
 
  
  ngOnInit() {
    this.addressformgroup  = this._formbuilder.group({
      // 'street': new FormControl(this.street, Validators.required),
      
      // city: [null, Validators.required],
      // zipCode: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^[0-9]{5}$')]],
      // unit: [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]],

      
        street : ['', Validators.required],
      
        city: ['',Validators.required],

        zipCode:['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],

        unit:['No units']
        
      
    })
    // this.cli.bspropertytype.subscribe(propertytype => {this.propertytype = propertytype;} );
    
    if(this.propertytype === "Appartment")
    {
      this.isAppartment = true;
      this.addressformgroup.get('unit').setValue(this.propertytype);
    }
  }


}
