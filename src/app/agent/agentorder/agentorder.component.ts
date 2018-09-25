import {Component,OnInit,ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, TransitionCheckState} from '@angular/material';
import { AngularFireDatabase,AngularFireList, } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ClientService } from '../../shared/client.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { User } from '../../shared/user';
@Component({
  selector: 'app-agentorder',
  templateUrl: './agentorder.component.html',
  styleUrls: ['./agentorder.component.css']
})

export class AgentorderComponent implements OnInit {
  userData: any;
  name:any;

  constructor(private db:AngularFirestore, private cli:ClientService){

  }
   
    ngOnInit(){
    
    // this.db.list('users').valueChanges().subscribe(res=>{
    //   console.log(res);this.userData=res});
   this.cli.uservalue();

   console.log(this.name);
  
   
  }
  }