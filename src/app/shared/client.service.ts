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
  //End Address
}