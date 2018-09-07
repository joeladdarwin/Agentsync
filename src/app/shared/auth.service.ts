import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { User } from './user';




@Injectable()
export class AuthService {
  users$ : Observable<User>;

  constructor(private afAuth : AngularFireAuth, private afs : AngularFirestore, private router : Router
  ) {}
    
  
    // determines the user has matching role
    private checkAuthorization(user:User,allowedRoles: string[]):boolean{
      if (!user) return false
      for(const role of allowedRoles){
        if(user.roles[role])
        {
          return true
        }
      }
      return false

    }
  canCreateOrder(user: User):boolean{
    const allowed = ['admin', 'user']
    return this.checkAuthorization(user, allowed)
  }
  canReadOrder(user: User): boolean {
    const allowed = ['admin', 'agent', 'user']
    return this.checkAuthorization(user, allowed)
  }
  canEditOrder(user: User):boolean {
    const allowed = ['admin', 'agent', 'user']
    return this.checkAuthorization(user, allowed)
  }
  canDeleteOrder(user: User): boolean {
    const allowed = ['admin', 'agent']
    return this.checkAuthorization(user, allowed)
  }
}
 

