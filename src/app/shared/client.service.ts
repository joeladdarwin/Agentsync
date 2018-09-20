import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private auth:AuthService, private router:Router) { }

  // Common
  // End of Common
 
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
    return this.auth.getinfo()
  }
  // End of Dashboard
}
