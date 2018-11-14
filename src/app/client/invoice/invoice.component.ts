
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator, MAT_SORT_HEADER_INTL_PROVIDER } from '@angular/material';
import { AngularFirestore,QuerySnapshot,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable,combineLatest, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { DatePipe } from '@angular/common';
import { map, filter, switchMap, take, tap } from 'rxjs/operators';
import { ObjectUnsubscribedErrorCtor } from 'rxjs/internal/util/ObjectUnsubscribedError';
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

}
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent  {
  postsCol: AngularFirestoreCollection<Order>;
  posts: Observable<Order[]>;
  Query:any;
  property:any;
  data: Observable<any[]>;
  datas:any;
  
  constructor(private afStorage: AngularFireStorage, private cli: ClientService, private auth:AuthService,private afs: AngularFirestore,public storage: AngularFireStorage) { }
 
  ngOnInit() {
    
     }
   ngAfterViewInit(){
   
    const uid=this.auth.currentUserId;
    console.log(+uid);
   // this.property=this.afs.collection<Order>('orders', ref => ref.where
   // ('uid','==', uid)).valueChanges();
   }
   order(){
    const uid=this.auth.currentUserId;
    var citiesRef = this.afs.collection<Order>(`users/${uid}/orders`, ref => ref.where
    ('status','==', 'new'));
    this.property = citiesRef.ref.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    }


}
