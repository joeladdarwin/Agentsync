import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private cli: ClientService) { }

  ngOnInit() {
  }

}
