import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ClientService]
})
export class RegisterComponent implements OnInit {

  constructor(private cli: ClientService) { }

  ngOnInit() {
  }

}
