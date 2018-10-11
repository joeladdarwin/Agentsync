import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-visitingtime',
  templateUrl: './visitingtime.component.html',
  styleUrls: ['./visitingtime.component.css']
})
export class VisitingtimeComponent implements OnInit {
visitingdatenow;
  constructor(private cli: ClientService) { }
  updatetime(a){
    var datenew = new Date(this.visitingdatenow);
    datenew.setHours(a);
    datenew.setMinutes(0);
    console.log(datenew);
    this.cli.updatevisitingtime(datenew)
  }
  ngOnInit() {
    this.cli.bsvisitingdate.subscribe(visitingdate => { this.visitingdatenow = visitingdate });
  }
  add(){
    console.log();
    
  }

}
