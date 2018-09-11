import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { take, map, tap, } from 'rxjs/operators'




@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authsr: AuthService,
    private router: Router, private afAuth:AngularFireAuth) { }
  canActivate(): Observable<boolean> {
    return this.afAuth.authState.take(1).map(user => !!user).tap(loggedIn=>{
      if(!loggedIn)
      {
        console.log('access denied')
        this.router.navigate(['/login'])
      }

    })

  }
     
}
