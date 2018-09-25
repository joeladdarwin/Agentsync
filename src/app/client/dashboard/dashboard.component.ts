import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], 
  providers:[ClientService, AuthService]
})
export class DashboardComponent implements OnInit {
datas:any;
uid:string;
  object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
  constructor(private cli:ClientService, private auth:AuthService) { 
    
   
  }
 
  ngOnInit() {

this.datas = this.auth.getinfox();
  }

}
