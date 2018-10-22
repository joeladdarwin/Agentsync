import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
orders;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.orders = this.auth.clientqueryorderlen();

  }

}
