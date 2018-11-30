import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css'],
  providers:[AuthService]
})
export class ForgetComponent implements OnInit {
value:string;
  constructor(public auth:AuthService) { }
  forget(value)
  {
   
    this.auth.forgetemail(value);
    
  }
  ngOnInit() {
  }

}
