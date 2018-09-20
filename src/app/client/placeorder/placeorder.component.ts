import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css'],
  providers:[ClientService  ]
})
export class PlaceorderComponent implements OnInit {
names:any;
orderdate = Date.now();
  constructor(private client:ClientService,private router:Router) { 
    this.names=this.client.getUsername();
  }

  ngOnInit() {
  }

}
