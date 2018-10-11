import {Component,OnInit,ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, TransitionCheckState} from '@angular/material';
import { AngularFireDatabase,AngularFireList, } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ClientService } from '../../shared/client.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { User } from '../../shared/user';
import { async } from 'q';
@Component({
  selector: 'app-agentorder',
  templateUrl: './agentorder.component.html',
  styleUrls: ['./agentorder.component.css']
})

export class AgentorderComponent implements OnInit {
  
datanew;
constructor(private cli:ClientService){

}
  // userData: any;
  // name:any;
  // users:any;
  // userdata1:any;
  // constructor(private db:AngularFirestore, private cli:ClientService){

  // }
   
  //   ngOnInit(){
    
  //   // this.db.list('users').valueChanges().subscribe(res=>{
  //   //   console.log(res);this.userData=res});
  //  this.users=this.cli.uservalue();
  //  console.log("enter");

  //  console.log(this.users);
  
   
  // }
  // }
// dataSource=new MatTableDataSource();
// @ViewChild(MatPaginator)paginator:MatPaginator;
// @ViewChild(MatSort)sort:MatSort;
//  constructor(private client:ClientService){

//  }

// ngAfterViewInit(){
//   this.dataSource.paginator=this.paginator;
//   console.log("paginatip");
//   this.dataSource.sort=this.sort;
// }
 
  ngOnInit(){
  
// this.client.getdoc().subscribe(res=>this.dataSource.data=res);
// console.log("htyy"+this.dataSource.data);

//   }
//   applyFilter(filtervalue:string){
//     filtervalue=filtervalue.trim();
//     filtervalue=filtervalue.toLowerCase();
//     console.log("dfdasfs")
//     this.dataSource.filter=filtervalue;
this.datanew=this.cli.getdoc();
  }


}