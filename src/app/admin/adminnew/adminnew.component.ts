import { Component, AfterViewInit, ViewChild } from '@angular/core';import { MatTableDataSource, MatSort, MatDialog, MatPaginator, MAT_SORT_HEADER_INTL_PROVIDER } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from '../../shared/auth.service';
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
  selector: 'app-adminnew',
  templateUrl: './adminnew.component.html',
  styleUrls: ['./adminnew.component.css']
})
export class AdminnewComponent {
  displayedColumns = ['no','building','address','date/time','ordervalue','status','edit/delete'];
  dataSource: MatTableDataSource<Order>; 
 userid:any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  property:any;
  constructor(private afauth: AngularFireAuth,private afs: AngularFirestore, public dialog: MatDialog, private auth:AuthService) {
    
  }
  ngOnInit(){
   
    
  }
  ngAfterViewInit() 
  {
    this.userid = this.afauth.auth.currentUser.uid;
    this.afs.collection<Order>(`users/${this.userid}/orders`, ref => ref.where
    ('status','==', 'new')).valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    
  }
  scheduleorder(a){
    console.log(a)
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
  update(a){
    this.afs.collection('orders').doc(a).update({
     status: 'scheduled'
   }).then(() => {
     
   })
   this.afs.collection(`users/${this.userid}/orders`).doc(a).update({
    status: 'scheduled'
  }).then(() => {
    alert('updated');
  })
 
 
 }
 delete(b) {
  this.afs.collection('orders').doc(b).delete().then(() => {
   
  })
  this.afs.collection(`users/${this.userid}/orders`).doc(b).delete().then(() => {
    alert('deleted');
  })
}
}


