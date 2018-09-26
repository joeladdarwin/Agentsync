import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cli: ClientService) { }

  ngOnInit() {
  }
  signout()
  {
    this.cli.signout()
  }
}
