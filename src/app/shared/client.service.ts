import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable({
  providedIn: 'root'
})

export class ClientService {
  displayName: string;
  constructor(private auth:AuthService, private router:Router,private afAuth:AngularFireAuth) { }


  // CommonCommon
  // End of 
 
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
  //End Address
}