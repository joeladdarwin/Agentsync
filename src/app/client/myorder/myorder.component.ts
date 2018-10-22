import { Component } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog,  } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';

export interface Order {
  orderid:number;
 propertytype:string;
 street:string;
 unit:any;
 comments:any;
 Photographyaddons:string;
 Photographyaddonsprice:any;
 Videoaddons:string;
 VideoaddonsPrice:any;
 orderby:any;
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
export class MyorderComponent  {

  displayedColumns = ['date/time','address','icon'];
  dataSource: MatTableDataSource<Order>; 

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {
    
  }
  ngOnInit(){
   
    this.afs.collection<Order>('orders').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 
    })
  }

  

}