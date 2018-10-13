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
  accesspropertycode='';
  orderarray;
  paddonarray;
  vaddonarray;
  ispaddonarray:boolean;
  isvaddonarray:boolean;
  orderdata:any;
  constructor(private cli:ClientService) { }
 
  submitorder()
  {
 this.orderdata = {
      propertytype: this.propertytype,
      squarefeet: this.squarefeet,
      address:{
        street:this.street,
        city:this.city,
        zip:this.zip,
        unit:this.appartmentunitno,
      },
  
      orderprice:this.orderprice,
      meetingtype:this.accessproperty,
      accesscode:this.accesspropertycode,
      visitingdate:this.visitingdatenow,
      ordereddate:Date.now()
    }
    console.log(this.orderdata);
    this.cli.setorder(this.orderdata)
  }
  ngOnInit() {
    this.cli.bsstreet.subscribe(street => { this.street = street;});
    this.cli.bscity.subscribe(city => { this.city = city });
    this.cli.bszip.subscribe(zip => { this.zip = zip });
    this.cli.bsappartmentunitno.subscribe(appartmentunitno=>{this.appartmentunitno = appartmentunitno});
    this.cli.bsaccessproperty.subscribe(accessproperty=>{this.accessproperty = accessproperty});
    this.cli.bsaccesspropertycode.subscribe(accesspropertycode=>{this.accesspropertycode = accesspropertycode});
    this.cli.bsorderarray.subscribe(orderarray => { this.orderarray = orderarray });
    this.cli.bspaddonarray.subscribe(paddonarray => { this.paddonarray = paddonarray });
    this.cli.bsvaddonarray.subscribe(vaddonarray => { this.vaddonarray =  vaddonarray });
    this.cli.bsorderprice.subscribe(orderprice => { this.orderprice = orderprice });
    this.cli.bsvisitingdate.subscribe(visitingdate => { this.visitingdatenow = visitingdate });
    this.cli.bscomment.subscribe(comment => { this.comment = comment });
    this.cli.bssquarefeet.subscribe(squarefeet => { this.squarefeet = squarefeet });
    this.cli.bspropertytype.subscribe(propertytype=>{this.propertytype = propertytype;});
    if(this.paddonarray.length>0)
    {
      this.ispaddonarray = true;
    }
    if (this.vaddonarray.length > 0) {
      this.isvaddonarray = true;
    }
    console.log(this.orderdata+"is this");
  }

}
