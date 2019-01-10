import { Component, AfterViewInit, ViewChild } from '@angular/core';import { MatTableDataSource, MatSort, MatDialog, MatPaginator, MAT_SORT_HEADER_INTL_PROVIDER } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../shared/auth.service';
export interface Order {
  Productname:string;
  deliverydate:Date;
  orderdate:Date;
  productversion:string;

}
@Component({
  selector: 'app-admincomplete',
  templateUrl: './admincomplete.component.html',
  styleUrls: ['./admincomplete.component.css']
})
export class AdmincompleteComponent {
  displayedColumns = ['no','building','address','date/time','ordervalue','edit/delete'];
  dataSource: MatTableDataSource<Order>; 
  userid:any;
property:any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private afs: AngularFirestore, public dialog: MatDialog,private afauth: AngularFireAuth,private auth:AuthService) {
    
  }
  ngOnInit(){
   
    
  }
  ngAfterViewInit() 
  {
    this.userid = this.afauth.auth.currentUser.uid;
     this.afs.collection<Order>(`users/${this.userid}/orders`, ref => ref.where
    ('status','==', 'completed')).valueChanges().subscribe(data => {
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
}
 