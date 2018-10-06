import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-addonv',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css']
})
export class AddonsComponent implements OnInit {
pcommunityshots;
ptwlightshots;
prushfee;
orderarray:Array<any>;
paddonarray:Array<any>=[];
paddonprice:any;
orderprice;
total;
  constructor(private cli:ClientService) { 
   
    
  }
  paddonsupdated()
  {
    console.log(this.orderarray);
    console.log(this.paddonarray);
    this.cli.setpaddonsarray(this.paddonarray, this.orderarray)
    this.cli.settotalprice(this.total)
  }
  pushpcs(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.pcommunityshots !== "customprice") {

        this.paddonprice = this.paddonprice + this.pcommunityshots;
        this.total = this.total + this.paddonprice;
      }

      this.paddonarray.push([a, this.pcommunityshots])
      console.log(this.paddonarray);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.pcommunityshots !== "customprice") {
        this.paddonprice = this.paddonprice - this.pcommunityshots;
        this.total = this.total - this.paddonprice;
      }


      for (var i = 0; i < this.paddonarray.length; i++) {
        if (this.paddonarray[i][0] == a) {
          this.paddonarray.splice(i, 1);
        }
      }
      console.log(this.paddonarray);
    }


  }
  pushpts(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.ptwlightshots !== "customprice") {

        this.paddonprice = this.paddonprice + this.ptwlightshots;
        this.total = this.total + this.paddonprice;
      }
      
      this.paddonarray.push([a, this.ptwlightshots])
      console.log(this.paddonarray);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.ptwlightshots !== "customprice") {
        this.paddonprice = this.paddonprice - this.ptwlightshots;
        this.total = this.total - this.paddonprice;
      }


      for (var i = 0; i < this.paddonarray.length; i++) {
        if (this.paddonarray[i][0] == a) {
          this.paddonarray.splice(i, 1);
        }
      }
      console.log(this.paddonarray);
    }


  }
  pushvrf(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.prushfee !== "customprice") {

        this.paddonprice = this.paddonprice + this.prushfee;
        this.total = this.total + this.paddonprice;
      }
      
      this.paddonarray.push([a, this.prushfee])
      console.log(this.paddonarray);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.prushfee !== "customprice") {
        this.paddonprice = this.paddonprice - this.prushfee;
        this.total = this.total - this.paddonprice;
      }


      for (var i = 0; i < this.paddonarray.length; i++) {
        if (this.paddonarray[i][0] == a) {
          this.paddonarray.splice(i, 1);
        }
      }
      console.log(this.paddonarray);
    }


  }
  ngOnInit() {
   
    
    this.cli.bspcommunityshots.subscribe(pcommunityshots=>{this.pcommunityshots = pcommunityshots});
    this.cli.bsptwlightshots.subscribe(ptwlightshots=>{this.ptwlightshots = ptwlightshots});
    this.cli.bsprushfee.subscribe(prushfee=>{this.prushfee = prushfee});
    this.cli.bsorderprice.subscribe(orderprice=>{this.orderprice = orderprice});
    this.cli.bspaddonprice.subscribe(paddonprice=>{this.paddonprice = paddonprice});
    this.cli.bsorderarray.subscribe(orderarray=>{this.orderarray = orderarray});
    console.log(this.orderprice);
    console.log(this.paddonprice+"is paddon");
    if(this.orderprice != 'customprice')
    {
      this.total = this.orderprice + this.paddonprice;
    }else
    {
      this.total = this.orderprice;
    }
   
    
           }
          }
