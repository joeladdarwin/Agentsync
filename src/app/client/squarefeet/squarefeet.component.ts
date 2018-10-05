import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';

@Component({
  selector: 'app-squarefeet',
  templateUrl: './squarefeet.component.html',
  styleUrls: ['./squarefeet.component.css']
})
export class SquarefeetComponent implements OnInit {
  propertytype: string;
  squarefeet : string;
  street:string;
  constructor(private cli: ClientService) { }
  updatesqft(unit)
  {
    this.cli.setsquarefeet(unit)
  }
  checksqft()
  {
    if(this.squarefeet ==='Not updated')
    {
      alert("Please update squarefeet");
    }
    this.cli.gotoproducts();
  }
  ngOnInit() {
    this.cli.bspropertytype.subscribe(propertytype => { this.propertytype = propertytype; });
    this.cli.bssquarefeet.subscribe(squarefeet =>{ this.squarefeet = squarefeet});
    this.cli.bsstreet.subscribe(street => {this.street = street});
  }
 
 
}
