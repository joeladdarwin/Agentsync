
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent  {
query:any;
  datas:any;
  constructor( private cli: ClientService, private auth:AuthService) { }
 
  ngOnInit() {
    
     }
   ngAfterViewInit(){
   this.query=this.cli.getorder;
   console.log(this.query);
   this.datas=this.auth.currentUserId;
   console.log(this.datas)
    
   }
  


}
