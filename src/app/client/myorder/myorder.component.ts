import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BehaviorSubject, Observable} from 'rxjs';
export interface Order {
  orderid:number;
 propertytype:string;
 street:string;
 unit:any;
 accesscode:any;
 city:string;
 zip:string;
orders:any;
property:any;
squarefeet:string;
ordersprice:number
  visitingdate:Date;
  orderprice:number;

}
@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {
  userscol: AngularFirestoreCollection<Order>;
  users: Observable<Order[]>;  



 

  constructor(private afs: AngularFirestore) {
    
  }
  ngOnInit() {
    this.userscol = this.afs.collection('orders');
    this.users = this.userscol.valueChanges();
  }

  // ngAfterViewInit() 
  // {
  //   this.afs.collection<Order>('orders').valueChanges();
  // }
  

}
