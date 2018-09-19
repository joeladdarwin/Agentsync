import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { Router } from '@angular/router'; 
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[ClientService]
})
export class DashboardComponent implements OnInit {

name:any;
number:any;
constructor(private client:ClientService,private router:Router){
   
}
  ngOnInit() {
  }

}
