import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-squarefeet',
  templateUrl: './squarefeet.component.html',
  styleUrls: ['./squarefeet.component.css']
})
export class SquarefeetComponent implements OnInit {
  title = "New Order > First Unit";
  property;
  obj;
  constructor(private cli:ClientService,private router:Router) {
     

  }
 
  ngOnInit() {
    

}
}
