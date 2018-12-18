import { Component, OnInit,AfterViewInit  } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore,QuerySnapshot } from 'angularfire2/firestore';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers:[ClientService, AuthService],
  
})
export class ContainerComponent {
  showFiller = false;
  profile:any;
  userid:any;
  photo:any;
  avisosTest :Observable<any>;
  constructor(private cli:ClientService,public auth:AuthService,public afauth:AngularFireAuth,private afs: AngularFirestore) { }

  ngOnInit() {
    this.profile = this.auth.users$;
    this.userid = this.afauth.auth.currentUser.uid;
   this.photo=this.afs.collection<any>('users').doc(this.userid).valueChanges();
    

  }
  logout(){
    this.auth.signOut;
  }
  ngAfterViewInit(){
   
    this.avisosTest =this.auth.clientqueryorderlen();
   }
   signout()
   {
     this.auth.signOut();
   }
   public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
