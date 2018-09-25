import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../shared/user';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Order } from './order';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  usersCollection : AngularFirestoreCollection<User>;
  ordersCollection: AngularFirestoreCollection<Order>;
  userData: any;
  displayName: string;
  user : Observable<User[]>;
  constructor(private auth:AuthService, private router:Router,private afAuth:AngularFireAuth, private db:AngularFirestore,private afs:AngularFireStorage) { }


  // CommonCommon
  // End of 
 
  // Signup
  register(registerForm){
    this.auth.register(registerForm).then(this.router.navigate['/thanks'])
  }
  // End of Signup
  // Forget
  forget(){

  }
  // End of Forget
  //Login
  clientlogin(email,pass)
  {
    return this.auth.login(email, pass)   
  }
  // Login End
  // Dashboard
  getuser(){
    console.log("jil");
    return
  } 
  getUsername()
  {
    return this.afAuth.auth.currentUser.displayName;
  }  

  g
  // End of Dashboard
  //Address
  address(street){
    return street.password;
    
  
  }

  uservalue(){
// this.db.collection('users').get().then(function(querySnapshot) {
//       querySnapshot.forEach(function(doc) {
//           // doc.data() is never undefined for query doc snapshots
//           console.log(doc.id, " => ", doc.data());
//       });
//   });
   
  }
  //End Address
}