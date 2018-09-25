import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore'
import { User } from './user';
@Injectable({
  providedIn: 'root'
})

export class ClientService {
  uid$: any;
usersCollection: AngularFirestoreCollection<User>;

  constructor(private auth: AuthService, private afAuth: AngularFireAuth, private router:Router, private afs:AngularFirestore) {
  this.uid$ = this.auth.currentUserId;

   }

 
  // Common
  getuserdata(uid) {
    
    console.log("uid is" + uid);
    const userRef$ = this.afs.collection('users').doc(uid);
    // this.afs.doc<User>(`users/${uid}`);
    userRef$.ref.get().then(function (doc) {
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

  // End of Common
 
  // Signup
  register(registerForm){
    return this.auth.registerclient(registerForm)
  }
  // End of Signup
  // Forget
  forget(){

  }
  // End of Forget
  //Login
  clientlogin(email,pass)
  {
    // this.uid$ = this.afAuth.auth.currentUser.uid;
    // console.log(this.getuserdata(this.uid$)+"isis")
    return this.auth.login(email, pass).catch(error => {

      throw error
    })   
  }
  signout(){
    this.auth.signOut()
    this.router.navigate(['/login'])
  }
  // Login End
  // Dashboard
  
  // End of Dashboard
  //Address
  address(street){
    return street.password;
  }
  //End Address
}
