import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { take } from 'rxjs/operator/take';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';
import { Observable} from 'rxjs';




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
