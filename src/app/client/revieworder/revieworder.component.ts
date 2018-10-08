import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-revieworder',
  templateUrl: './revieworder.component.html',
  styleUrls: ['./revieworder.component.css'],

})
export class RevieworderComponent implements OnInit {
  propertytype;
  squarefeet;
  appartmentunit;
  street;
  city;
  zip;
  appartmentunitno;
  photography;
  message:string;
  comment;

  constructor(private cli:ClientService) { }

  ngOnInit() {
    this.message = "*Please Select all that apply.";
    this.cli.bscomment.subscribe(comment=>{this.comment = comment});
   
    this.cli.bsstreet.subscribe(street=>{this.street=street;console.log("street"+this.street)});
    this.cli.bscity.subscribe(city=>{this.city=city});
    this.cli.bszip.subscribe(zip=>{this.zip=zip});
    this.cli.bssquarefeet.subscribe(squarefeet=>{this.squarefeet=squarefeet});
    this.cli.bsorderarray.subscribe(squarefeet=>{this.squarefeet=squarefeet});
    this.cli.bssquarefeet.subscribe(squarefeet=>{this.squarefeet=squarefeet});
    this.cli.bssquarefeet.subscribe(squarefeet=>{this.squarefeet=squarefeet});
    this.cli.bssquarefeet.subscribe(squarefeet=>{this.squarefeet=squarefeet});
    console.log("thrhj"+this.comment);
 
   
  }

}
