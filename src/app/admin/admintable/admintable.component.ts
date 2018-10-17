import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator, MAT_SORT_HEADER_INTL_PROVIDER } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject} from 'rxjs';
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
  selector: 'app-admintable',
  templateUrl: './admintable.component.html',
  styleUrls: ['./admintable.component.css']
})
export class AdmintableComponent{
  displayedColumns = ['no','building','address','date/time','ordervalue','edit/delete'];
  dataSource: MatTableDataSource<Order>; 
  visitingdate: BehaviorSubject<Date>;
  property:any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {
    
  }
  ngOnInit(){
   
  
  }
  ngAfterViewInit() 
  {
    this.afs.collection<Order>('orders').valueChanges().subscribe(data => {
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