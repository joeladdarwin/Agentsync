import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { trigger, transition, style, animate , state, keyframes,group} from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations:[
    trigger('photography',[
      transition('void => *',[
        animate(1000,keyframes([
        style({opacity: 0,transform: 'translateX(-200%)', offset: 0}),
        style({opacity: 1,transform: 'translateX(-200%)', offset: 0.3}),
        style({opacity: 1,transform: 'translateX(0)', offset: 1.0})
        ])),
      ]),
    ]),
    trigger('360tour',[
      transition('void => *',[
        animate(1500,keyframes([
        style({opacity: 0,transform: 'translateX(-200%)', offset: 0}),
        style({opacity: 1,transform: 'translateX(-200%)', offset: 0.3}),
        style({opacity: 1,transform: 'translateX(0)', offset: 1.0})
        ])),
      ]),
    ]),
    trigger('videotour',[
      transition('void => *',[
        animate(2000,keyframes([
        style({opacity: 0,transform: 'translateX(-200%)', offset: 0}),
        style({opacity: 1,transform: 'translateX(-200%)', offset: 0.3}),
        style({opacity: 1,transform: 'translateX(0)', offset: 1.0})
        ])),
      ]),
    ]),
    trigger('singleproperty',[
      transition('void => *',[
        animate(2500,keyframes([
        style({opacity: 0,transform: 'translateX(-200%)', offset: 0}),
        style({opacity: 1,transform: 'translateX(-200%)', offset: 0.3}),
        style({opacity: 1,transform: 'translateX(0)', offset: 1.0})
        ])),
      ]),
    ]),
    trigger('brochure(4page)25',[
      transition('void => *',[
        animate(3000,keyframes([
        style({opacity: 0,transform: 'translateX(-200%)', offset: 0}),
        style({opacity: 1,transform: 'translateX(-200%)', offset: 0.3}),
        style({opacity: 1,transform: 'translateX(0)', offset: 1.0})
        ])),
      ]),
    ]),
    trigger('brochure(4page)50',[
      transition('void => *',[
        animate(3500,keyframes([
        style({opacity: 0,transform: 'translateX(-200%)', offset: 0}),
        style({opacity: 1,transform: 'translateX(-200%)', offset: 0.3}),
        style({opacity: 1,transform: 'translateX(0)', offset: 1.0})
        ])),
      ]),
    ]),
    trigger('brochure(8page)25',[
      transition('void => *',[
        animate(4000,keyframes([
        style({opacity: 0,transform: 'translateX(-200%)', offset: 0}),
        style({opacity: 1,transform: 'translateX(-200%)', offset: 0.3}),
        style({opacity: 1,transform: 'translateX(0)', offset: 1.0})
        ])),
      ]),
    ]),
    trigger('brochure(8page)50',[
      transition('void => *',[
        animate(4500,keyframes([
        style({opacity: 0,transform: 'translateX(-200%)', offset: 0}),
        style({opacity: 1,transform: 'translateX(-200%)', offset: 0.3}),
        style({opacity: 1,transform: 'translateX(0)', offset: 1.0})
        ])),
      ]),
    ]),
    trigger('floorplans(b&w)',[
      transition('void => *',[
        animate(5000,keyframes([
        style({opacity: 0,transform: 'translateX(-200%)', offset: 0}),
        style({opacity: 1,transform: 'translateX(-200%)', offset: 0.3}),
        style({opacity: 1,transform: 'translateX(0)', offset: 1.0})
        ])),
      ]),
    ]),
    trigger('floorplans(color)',[
      transition('void => *',[
        animate(5500,keyframes([
        style({opacity: 0,transform: 'translateX(-200%)', offset: 0}),
        style({opacity: 1,transform: 'translateX(-200%)', offset: 0.3}),
        style({opacity: 1,transform: 'translateX(0)', offset: 1.0})
        ])),
      ]),
    ]),
    trigger('floorplans(c&f)',[
      transition('void => *',[
        animate(6000,keyframes([
        style({opacity: 0,transform: 'translateX(-200%)', offset: 0}),
        style({opacity: 1,transform: 'translateX(-200%)', offset: 0.3}),
        style({opacity: 1,transform: 'translateX(0)', offset: 1.0})
        ])),
      ]),
    ]),
    trigger('doublesidedflyer50',[
      transition('void => *',[
        animate(6500,keyframes([
        style({opacity: 0,transform: 'translateX(-200%)', offset: 0}),
        style({opacity: 1,transform: 'translateX(-200%)', offset: 0.3}),
        style({opacity: 1,transform: 'translateX(0)', offset: 1.0})
        ])),
      ]),
    ]),
    trigger('doublesidedflyer100',[
      transition('void => *',[
        animate(7000,keyframes([
        style({opacity: 0,transform: 'translateX(-200%)', offset: 0}),
        style({opacity: 1,transform: 'translateX(-200%)', offset: 0.3}),
        style({opacity: 1,transform: 'translateX(0)', offset: 1.0})
        ])),
      ]),
    ]),
  ]
})
export class ProductsComponent implements OnInit {
  squarefeet;
  photography;
  tour360;
  singlepagewebsite;
  brouchure4p25;
  brouchure4p50;
  brouchure8p25;
  brouchure8p50;
  videotour;
  floorplanbw;
  floorplanclr;
  floorplansclrfre;
  dsflyer50;
  dsflyer100;
  order:Array<any>=[];
  orderprice:any;
  message:string;
  constructor(private cli:ClientService) {
   
   }
  gotosquarefeet()
  {
    this.cli.gotosquarefeet();
  }
 updateorder()
 {
   if(this.order.length >= 1)
   {
     this.cli.setordersarray(this.order);
     this.cli.setorderprice(this.orderprice)
   }
   else{
     this.message = "Please select atleast one item";
   }
 }
  pushpgy(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if(classes.includes('btn1'))
    {
      classList.add('btns');
      classList.remove('btn1');
      console.log("selec")
      if (this.photography !== "customprice") {
        this.orderprice = this.orderprice + this.photography;

      }
      this.order.push([a, this.photography])
      console.log(this.order);
    }
   else if(classes.includes('btns'))
   {
     classList.add('btn1');
     classList.remove('btns');
     console.log("rejse")
      if (this.photography !== "customprice") {
        this.orderprice = this.orderprice - this.photography;

      }
     
     
      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i][0] == "Photography") {
          this.order.splice(i, 1);
        }
      }
     console.log(this.order);
   }
    
   }
  pusht360(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');
      
      if (this.tour360 !== "customprice") {

        this.orderprice = this.orderprice + this.tour360;
      }
      this.order.push([a, this.tour360])
      console.log(this.order);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');
   
      if (this.tour360 !== "customprice") {
        this.orderprice = this.orderprice - this.tour360;

      }
     
    
      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i][0] == a) {
          this.order.splice(i, 1);
        }
      }
      console.log(this.order);
    }
    
    
   }
  pushvt(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.videotour !== "customprice") {

        this.orderprice = this.orderprice + this.videotour;
      }
      this.order.push([a, this.videotour])
      console.log(this.order);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.videotour !== "customprice") {
        this.orderprice = this.orderprice - this.videotour;

      }


      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i][0] == a) {
          this.order.splice(i, 1);
        }
      }
      console.log(this.order);
    }


  }
  pushspw(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.singlepagewebsite !== "customprice") {

        this.orderprice = this.orderprice + this.singlepagewebsite;
      }
      this.order.push([a, this.singlepagewebsite])
      console.log(this.order);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.singlepagewebsite !== "customprice") {
        this.orderprice = this.orderprice - this.singlepagewebsite;

      }


      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i][0] == a) {
          this.order.splice(i, 1);
        }
      }
      console.log(this.order);
    }


  }
  pushb425(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.brouchure4p25 !== "customprice") {

        this.orderprice = this.orderprice + this.brouchure4p25;
      }
      this.order.push([a, this.brouchure4p25])
      console.log(this.order);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.brouchure4p25 !== "customprice") {
        this.orderprice = this.orderprice - this.brouchure4p25;

      }


      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i][0] == a) {
          this.order.splice(i, 1);
        }
      }
      console.log(this.order);
    }


  }
  pushb450(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.brouchure4p50 !== "customprice") {

        this.orderprice = this.orderprice + this.brouchure4p50;
      }
      this.order.push([a, this.brouchure4p50])
      console.log(this.order);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.brouchure4p50 !== "customprice") {
        this.orderprice = this.orderprice - this.brouchure4p50;

      }


      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i][0] == a) {
          this.order.splice(i, 1);
        }
      }
      console.log(this.order);
    }


  }
  pushb825(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.brouchure8p25 !== "customprice") {

        this.orderprice = this.orderprice + this.brouchure8p25;
      }
      this.order.push([a, this.brouchure8p25])
      console.log(this.order);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.brouchure8p25 !== "customprice") {
        this.orderprice = this.orderprice - this.brouchure8p25;

      }


      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i][0] == a) {
          this.order.splice(i, 1);
        }
      }
      console.log(this.order);
    }


  }
  pushb850(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.brouchure8p50 !== "customprice") {

        this.orderprice = this.orderprice + this.brouchure8p50;
      }
      this.order.push([a, this.brouchure8p50])
      console.log(this.order);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.brouchure8p50 !== "customprice") {
        this.orderprice = this.orderprice - this.brouchure8p50;

      }


      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i][0] == a) {
          this.order.splice(i, 1);
        }
      }
      console.log(this.order);
    }


  }
  pushfpbw(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.floorplanbw !== "customprice") {

        this.orderprice = this.orderprice + this.floorplanbw;
      }
      this.order.push([a, this.floorplanbw])
      console.log(this.order);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.floorplanbw !== "customprice") {
        this.orderprice = this.orderprice - this.floorplanbw;

      }


      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i][0] == a) {
          this.order.splice(i, 1);
        }
      }
      console.log(this.order);
    }


  }
  pushfpc(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.floorplanclr !== "customprice") {

        this.orderprice = this.orderprice + this.floorplanclr;
      }
      this.order.push([a, this.floorplanclr])
      console.log(this.order);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.floorplanclr !== "customprice") {
        this.orderprice = this.orderprice - this.floorplanclr;

      }


      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i][0] == a) {
          this.order.splice(i, 1);
        }
      }
      console.log(this.order);
    }


  }
  pushfpcf(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.floorplansclrfre !== "customprice") {

        this.orderprice = this.orderprice + this.floorplansclrfre;
      }
      this.order.push([a, this.floorplansclrfre])
      console.log(this.order);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.floorplansclrfre !== "customprice") {
        this.orderprice = this.orderprice - this.floorplansclrfre;

      }


      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i][0] == a) {
          this.order.splice(i, 1);
        }
      }
      console.log(this.order);
    }


  }
  pushd50(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.dsflyer50 !== "customprice") {

        this.orderprice = this.orderprice + this.dsflyer50;
      }
      this.order.push([a, this.dsflyer50])
      console.log(this.order);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.dsflyer50 !== "customprice") {
        this.orderprice = this.orderprice - this.dsflyer50;

      }


      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i][0] == a) {
          this.order.splice(i, 1);
        }
      }
      console.log(this.order);
    }


  }
  pushd100(e,a) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn1')) {
      classList.add('btns');
      classList.remove('btn1');

      if (this.dsflyer100 !== "customprice") {

        this.orderprice = this.orderprice + this.dsflyer100;
      }
      this.order.push([a, this.dsflyer100])
      console.log(this.order);
    }
    else if (classes.includes('btns')) {
      classList.add('btn1');
      classList.remove('btns');

      if (this.dsflyer100 !== "customprice") {
        this.orderprice = this.orderprice - this.dsflyer100;

      }


      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i][0] == a) {
          this.order.splice(i, 1);
        }
      }
      console.log(this.order);
    }


  }
 
  ngOnInit() {
    this.message = "*Please Select all that apply.";
    this.cli.bssquarefeet.subscribe(squarefeet => {this.squarefeet = squarefeet});
    this.cli.bssinglepagewebsite.subscribe(singlepagewebsite => { this.singlepagewebsite = singlepagewebsite })
    this.cli.bsphotography.subscribe(photography => {this.photography = photography});
    this.cli.bsvideotour.subscribe(videotour => {this.videotour= videotour});
    this.cli.bstour360.subscribe(tour360 => {this.tour360 = tour360});
    this.cli.bsbrouchure4p25.subscribe(brouchure4p25 => {this.brouchure4p25 = brouchure4p25});
    this.cli.bsbrouchure4p50.subscribe(brouchure4p50 =>{this.brouchure4p50 = brouchure4p50});
    this.cli.bsbrouchure8p25.subscribe(brouchure8p25 => {this.brouchure8p25 = brouchure8p25});
    this.cli.bsbrouchure8p50.subscribe(brouchure8p50 => {this.brouchure8p50 = brouchure8p50});
    this.cli.bsfloorplanbw.subscribe(floorplanbw => { this.floorplanbw = floorplanbw});
    this.cli.bsfloorplanclr.subscribe(floorplanclr => { this.floorplanclr = floorplanclr});
    this.cli.bsfloorplansclrfre.subscribe(floorplansclrfre => {this.floorplansclrfre = floorplansclrfre});
    this.cli.bsdsflyer50.subscribe(dsflyer50 => {this.dsflyer50 = dsflyer50});
    this.cli.bsdsflyer100.subscribe(dsflyer100 =>{this.dsflyer100 = dsflyer100});
    this.cli.bsorderprice.subscribe(orderprice => {this.orderprice = orderprice});
  }
  }


