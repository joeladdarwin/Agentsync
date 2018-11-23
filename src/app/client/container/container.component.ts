import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore,QuerySnapshot } from 'angularfire2/firestore';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  showFiller = false;
  profile:any;
  userid:any;
  photo:any;
  constructor(private auth:AuthService,public afauth:AngularFireAuth,private afs: AngularFirestore) { }

  ngOnInit() {
    this.profile = this.auth.users$;
    this.userid = this.afauth.auth.currentUser.uid;
   this.photo=this.afs.collection<any>('users').doc(this.userid).valueChanges();
    

  }
  logout(){
    this.auth.signOut;
  }

}
