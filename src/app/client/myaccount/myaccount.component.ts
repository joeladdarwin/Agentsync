import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
query;

  constructor(private router: Router) { }
  invoice() {
    this.router.navigate(['/main/myaccount/invoice'])
  }
  pay() {
    this.router.navigate(['/main/myaccount/pay'])
  }
  payment() {
    this.router.navigate(['/main/myaccount/paymentinfo'])
  }
  editprofile() {
    this.router.navigate(['/main/myaccount/editprofile'])
  }
  ngOnInit() {
  }

}
