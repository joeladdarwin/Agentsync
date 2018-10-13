import { Component, AfterViewInit, ViewChild } from '@angular/core';import { MatTableDataSource, MatSort, MatDialog, MatPaginator, MAT_SORT_HEADER_INTL_PROVIDER } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
export interface Order {
  Productname:string;
  deliverydate:Date;
  orderdate:Date;
  productversion:string;
}
@Component({
  selector: 'app-adminpending',
  templateUrl: './adminpending.component.html',
  styleUrls: ['./adminpending.component.css']
})
export class AdminpendingComponent {
  displayedColumns = ['no','orderid','deliverydate','edit/delete'];
  dataSource: MatTableDataSource<Order>; 

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
}

  
