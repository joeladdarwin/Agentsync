import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { map, filter, switchMap, take, tap, finalize } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { AngularFirestore,QuerySnapshot,AngularFirestoreCollection } from 'angularfire2/firestore';
export interface Order {
  orderid:number;
propertytype:string;
street:string;
unit:any;
orderby:any;
comments:any;
accesscode:any;
city:string;
zip:string;
orders:any;
property:any;
squarefeet:string;
ordersprice:number
  visitingdate:Date;
  orderprice:number;
  scheduleorder:any;

}
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent  {
  task: any;
  ref:any;
  orders:any;
  constructor(private cli: ClientService, private auth:AuthService,private afs: AngularFirestore) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
   
    var id=this.auth.currentUserId;
   console.log(id);
    this.orders= this.afs.collection<Order>('orders', ref => ref.where
    ('uid','==', id)).valueChanges();
    
    
   }
}
