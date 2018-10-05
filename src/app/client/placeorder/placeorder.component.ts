import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css'],

})
export class PlaceorderComponent implements OnInit {
  propertytype:string;
  constructor(private client:ClientService,private router:Router) { 
   
  } 
  upbuilding(build) {
   
    if(build ==="Appartment")
    {
      this.router.navigate(["/units"])
      this.client.setpropertytype(build)
    }
    else{
      this.router.navigate(['/address'])
      this.client.setpropertytype(build)
    }
  }
  ngOnInit() {
   
  }

}
