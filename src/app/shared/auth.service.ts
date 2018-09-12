import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user';




@Injectable()
export class AuthService {
  users$ : Observable<User>;

  constructor(private afAuth : AngularFireAuth, private afs : AngularFirestore, private router : Router
  ) {
    this.users$ = this.afAuth.authState.pipe(
      switchMap(
        user => {
                    if (user){
                      return this.afs.doc<User>('users/${user.uid}').valueChanges()
                    }
                    else
                    {
                      return null
                    }
                 }
           )
           )
  }
  
  private register(user)
  {
    try{
      return this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.phonenumber).then((credential)=>{
        this.updateuserdata(credential.user)
      })
    }
    catch(e)
    {
      console.log(e)
    }
  }

  private updateuserdata(user)
  {
    const userRef$ :AngularFirestoreDocument<any> = this.afs.doc<User>('users/${user.uid}');
    const userdata : User = {
      uid:user.uid,
      fullname:user.fullname,
      brokerage:user.brokerage,
      email:user.email,
      phonenumber:user.phonenumber,
      roles:{
        user:true
      }
    }
      return userRef$.set(userdata,{merge:true})
  }
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
 

