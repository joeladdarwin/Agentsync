import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-revieworder',
  templateUrl: './revieworder.component.html',
  styleUrls: ['./revieworder.component.css']
})
export class RevieworderComponent implements OnInit {
  propertytype;
  squarefeet;
  appartmentunit;
  street;
  city;
  zip;
  appartmentunitno;
  orderprice;
  visitingdatenow;
  comment;
  accessproperty;
  accesspropertycode;
  orderarray;

  constructor(private cli:ClientService) { }

  ngOnInit() {
    this.cli.bsstreet.subscribe(street => { this.street = street;});
    this.cli.bscity.subscribe(city => { this.city = city });
    this.cli.bszip.subscribe(zip => { this.zip = zip });
    this.cli.bsappartmentunitno.subscribe(appartmentunitno=>{this.appartmentunitno = appartmentunitno});
    this.cli.bsaccessproperty.subscribe(accessproperty=>{this.accessproperty = accessproperty});
    this.cli.bsaccesspropertycode.subscribe(accesspropertycode=>{this.accesspropertycode = accesspropertycode});
    this.cli.bsorderarray.subscribe(orderarray => { this.orderarray = orderarray });
    this.cli.bsorderprice.subscribe(orderprice => { this.orderprice = orderprice });
    this.cli.bsvisitingdate.subscribe(visitingdate => { this.visitingdatenow = visitingdate });
    this.cli.bscomment.subscribe(comment => { this.comment = comment });
    this.cli.bssquarefeet.subscribe(squarefeet => { this.squarefeet = squarefeet });
    this.cli.bspropertytype.subscribe(propertytype=>{this.propertytype = propertytype;});
    
  }

}