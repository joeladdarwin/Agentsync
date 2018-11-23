import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  showFiller = false;
  profile:any;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.profile = this.auth.users$;

  }
  logout(){
    this.auth.signOut;
  }

}
