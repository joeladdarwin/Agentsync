import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], 
  providers:[ClientService]
})
export class DashboardComponent implements OnInit {
name:any;
  constructor(private cli:ClientService) { }

  ngOnInit() {
this.name = this.cli.getuser();
console.log(this.name);
  }

}
