import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, fromDocRef  } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(public afs:AngularFirestore,private afstorage:AngularFireStorage,private afAuth:AngularFireAuth,private router:Router) { }


  // Common
  // End of Common
 
  // Signup
  
  // End of Signup
  // Forget
  // End of Forget
  //Login
  // Login End
  // Dashboard
  // End of Dashboard
  //getusername
  getUsername(){
    return this.afAuth.auth.currentUser.displayName;
  }
  getEmail(){
    return this.afAuth.auth.currentUser.email;
  }
  //endgetusername
  //Address
  address(street){    
    return street.password;
    
  
  }
  //End Address
}
