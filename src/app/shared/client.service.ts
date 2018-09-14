import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import { AngularFirestore  } from 'angularfire2/firestore';



@Injectable({
  providedIn: 'root'
  
})
export class ClientService {
  authState: any = null;
  displayName: string;
  error;
  email:string;

<<<<<<< HEAD
  constructor(private auth:AuthService) { }
=======

private userdetails: firebase.User = null;
  constructor(public afs :AngularFirestore, private afStorage : AngularFirestore, private afAuth: AngularFireAuth, private router: Router) { }
>>>>>>> 1c2f236e67ed34725fe050560ca4fdb31a8193a9

  // Common
  // End of Common
  // Signup
<<<<<<< HEAD
=======
  addUser(displayName, email, brokerage, phone, password){
  this.displayName;
  console.log("dsfsdg");
  
  }
>>>>>>> 1c2f236e67ed34725fe050560ca4fdb31a8193a9

  // End of Signup
  // Forget
  // End of Forget
  //Login
  // Login End
  // Dashboard
  // End of Dashboard
}
