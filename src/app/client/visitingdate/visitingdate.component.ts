import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router, NavigationExtras } from '@angular/router';
import { Observable  } from 'rxjs';
@Component({
  selector: 'app-visitingdate',
  templateUrl: './visitingdate.component.html',
  styleUrls: ['./visitingdate.component.css'],
})
export class VisitingdateComponent{
  mydate=new Date();
  formdate = '';
  constructor(private afs: AngularFirestore, private router: Router) { 
    this.formdate = formatDate(this.mydate, 'dd-MM-yyyy h:mm a', 'en-US');
   
  }

  ngOnInit() {
    
  }
  add(){
   let navigationExtras: NavigationExtras = {
    queryParams: {
    mydate:this.formdate
   } }
this.router.navigate(['visitingtime'], navigationExtras);
  
}
}
