import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-addonsv',
  templateUrl: './addonsv.component.html',
  styleUrls: ['./addonsv.component.css']
})
export class AddonsvComponent implements OnInit {
  vcommunityshots;
  vtwlightshots;
  vrushfee;
  vaddonarray: Array<any> = [];
  orderarray: Array<any>;
  vaddonprice:any;
  orderprice;
  total;
  constructor(private cli: ClientService) {

  }

  vaddonsupdated()
  {
    console.log(this.orderarray);
    this.cli.setvaddonsarray(this.vaddonarray)
    this.cli.settotalprice(this.total)
    this.cli.setorderprice(this.total)
  }
  pushvcs(e, a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.vcommunityshots !== "customprice") {

        this.vaddonprice = this.vaddonprice + this.vcommunityshots;
        this.total = this.total + this.vaddonprice;
      }

      this.vaddonarray.push([a, this.vcommunityshots])
      console.log(this.vaddonarray);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.vcommunityshots !== "customprice") {
        this.vaddonprice = this.vaddonprice - this.vcommunityshots;
        this.total = this.total - this.vaddonprice;
      }


      for (var i = 0; i < this.vaddonarray.length; i++) {
        if (this.vaddonarray[i][0] == a) {
          this.vaddonarray.splice(i, 1);
        }
      }
      console.log(this.vaddonarray);
    }


  }
  pushvts(e, a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.vtwlightshots !== "customprice") {

        this.vaddonprice = this.vaddonprice + this.vtwlightshots;
        this.total = this.total + this.vaddonprice;
      }

      this.vaddonarray.push([a, this.vtwlightshots])
      console.log(this.vaddonarray);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.vtwlightshots !== "customprice") {
        this.vaddonprice = this.vaddonprice - this.vtwlightshots;
        this.total = this.total - this.vaddonprice;
      }


      for (var i = 0; i < this.vaddonarray.length; i++) {
        if (this.vaddonarray[i][0] == a) {
          this.vaddonarray.splice(i, 1);
        }
      }
      console.log(this.vaddonarray);
    }


  }
  pushvrf(e, a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.vrushfee !== "customprice") {

        this.vaddonprice = this.vaddonprice + this.vrushfee;
        this.total = this.total + this.vaddonprice;
      }

      this.vaddonarray.push([a, this.vrushfee])
      console.log(this.vaddonarray);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.vrushfee !== "customprice") {
        this.vaddonprice = this.vaddonprice - this.vrushfee;
        this.total = this.total - this.vaddonprice;
      }


      for (var i = 0; i < this.vaddonarray.length; i++) {
        if (this.vaddonarray[i][0] == a) {
          this.vaddonarray.splice(i, 1);
        }
      }
      console.log(this.vaddonarray);
    }

  }

  ngOnInit() {
    this.cli.bsvcommunityshots.subscribe(vcommunityshots => { this.vcommunityshots = vcommunityshots });
    this.cli.bsvtwlightshots.subscribe(vtwlightshotsh => { this.vcommunityshots = vtwlightshotsh });
    this.cli.bsvrushfee.subscribe(vrushfee => { this.vrushfee = vrushfee });
    this.cli.bsorderprice.subscribe(orderprice => { this.orderprice = orderprice });
    this.cli.bsvaddonprice.subscribe(vaddonprice => { this.vaddonprice = vaddonprice });
    this.cli.bsorderarray.subscribe(orderarray => { this.orderarray = orderarray });
    console.log(this.orderprice);
    console.log(this.vaddonprice + "is paddon");
    if (this.orderprice != 'customprice') {
      this.total = this.orderprice + this.vaddonprice;
    } else {
      this.total = this.orderprice;
    }


  
  }


}
