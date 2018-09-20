import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user';
 



@Injectable()
export class AuthService {
  users$ : Observable<User>;
  authState: any = null;
  error: any = null;;
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
                      return of(null)
                    }
                 }
           )
           )

        
  }
  
  register(user)
  {
    try{
   
      return this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.phone).then((credential)=>{
       const uid = this.afAuth.auth.currentUser.uid;
       
        this.updateuserdata(user, uid)
        this.afAuth.auth.currentUser.updateProfile({ displayName: user.displayName, photoURL:"https://agent-sync-sonder.firebaseapp.com/assets/image/icons/logo1.jpg"})
        this.afAuth.auth.sendPasswordResetEmail(user.email)
        this.router.navigate(['/login'])
       
      })
    }
    catch(e)
    {
      console.log(e)
    }
  }
  login(email:string,pass:string)
  {
    return this.afAuth.auth.signInWithEmailAndPassword(email,pass).then(
      (user)=>{
        this.authState = user
        this.getinfo()
        this.router.navigate(['/main'])
        var a = this.afAuth.auth.currentUser.email;
        var b = this.afAuth.auth.currentUser.uid;
        var c = this.afAuth.auth.currentUser.phoneNumber;
        var d = this.afAuth.auth.currentUser.displayName;
        console.log("apple" + a+b+c+d);
      }
     ).catch((error)=> error)
  }
 getinfo() {
    return this.afAuth.auth.onAuthStateChanged(function (user) {
      if (user) {

        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        var phone = user.phoneNumber;
        var uid = user.uid;
      }
    });
  }
  private updateuserdata(user,uid)
  {
    console.log(user)
    const userRef$: AngularFirestoreDocument<any> = this.afs.doc<User>('users/${user.uid}');
    const userdata : User = {
      uid:uid,
      displayName: user.name,
      brokerage:user.brokerage,
      email:user.email,
      phonenumber:user.phone,
      roles:{
        user:true
      }
    }
      return userRef$.set(userdata,{merge:true})
  }
    // determines the user has matching role
    private checkAuthorization(user:User, allowedRoles: string[]):boolean{
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
 

