import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-addonv',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css']
})
export class AddonsComponent implements OnInit {
pcommunityshots;
ptwlightshotsh;
prushfee;
paddonarray:Array<any>=[];
paddonprice=null;
  constructor(private cli:ClientService) { 
    
  }
  pushpcs(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.pcommunityshots !== "customprice") {

        this.paddonprice = this.paddonprice + this.pcommunityshots;
      }

      this.paddonarray.push([a, this.pcommunityshots])
      console.log(this.paddonarray);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.pcommunityshots !== "customprice") {
        this.paddonprice = this.paddonprice - this.pcommunityshots;

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

      if (this.ptwlightshotsh !== "customprice") {

        this.paddonprice = this.paddonprice + this.ptwlightshotsh;
      }
      
      this.paddonarray.push([a, this.ptwlightshotsh])
      console.log(this.paddonarray);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.ptwlightshotsh !== "customprice") {
        this.paddonprice = this.paddonprice - this.ptwlightshotsh;

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
      }
      
      this.paddonarray.push([a, this.prushfee])
      console.log(this.paddonarray);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.prushfee !== "customprice") {
        this.paddonprice = this.paddonprice - this.prushfee;

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
    this.cli.bsvcommunityshots.subscribe(vcommunityshots=>{this.pcommunityshots = vcommunityshots});
    this.cli.bsvtwlightshots.subscribe(vtwlightshotsh=>{this.pcommunityshots = vtwlightshotsh});
    this.cli.bsvrushfee.subscribe(vrushfee=>{this.prushfee = vrushfee});

  }

}
