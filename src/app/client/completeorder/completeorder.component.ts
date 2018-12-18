import { Component, OnInit,  AfterViewInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { Observable } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-completeorder',
  templateUrl: './completeorder.component.html',
  styleUrls: ['./completeorder.component.css'],
  providers:[ClientService, AuthService]
})
export class CompleteorderComponent implements OnInit {
  orderlist :Observable<any>;
 orderprice;
 order;
  constructor(private cli:ClientService,  public auth:AuthService, private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params=>{
      this.order=params;
    })
    
  }
  ngAfterViewInit(){
   
     this.orderlist =this.auth.clientqueryorderlen();
    
   }

}
