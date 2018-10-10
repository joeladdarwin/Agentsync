import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

export interface Post {
  title:string;
  content:string;
   firstname:string;
  lastname:string;
}

@Component({
  selector: 'app-visitingtime',
  templateUrl: './visitingtime.component.html',
  styleUrls: ['./visitingtime.component.css']
})
export class VisitingtimeComponent{
visit:Date;
date:"";
book:AngularFirestoreCollection<Post>;
  constructor(private route: ActivatedRoute,private afs: AngularFirestore) { 
    this.route.queryParams.subscribe(params => {
      console.log(params);
  });
  }
  ngOnInit() {
  }
  add(){
    console.log();
    //console.log(this.visit);
    //this.afs.collection('orders').add(this.route.queryParams);
  }

}
