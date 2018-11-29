import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { map, filter, switchMap, take, tap, finalize } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
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
  property:any;
  orders:any;
  userid:any;
  constructor(private cli: ClientService, private auth:AuthService,private afs: AngularFirestore,private afauth: AngularFireAuth) { }

  ngOnInit() {
    this.userid = this.afauth.auth.currentUser.uid; 
    console.log("userid"+this.userid);
  }
  ngAfterViewInit(){
   
    
   
    this.orders= this.afs.collection<Order>(`users/${this.userid}/orders`, ref => ref.where
    ('status','==', 'completed')).valueChanges();

    
    
  }
  query(a){
    console.log(a);
   

   var docRef$= this.afs.collection<Order>('orders').doc(a);

   this.property = docRef$.ref.get().then(function (doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      return doc.data()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
  }
}
