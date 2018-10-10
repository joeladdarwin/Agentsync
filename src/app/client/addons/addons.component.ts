import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css']
})
export class AddonsComponent  {
  
  constructor(private cli:ClientService) { 
    
  }
  private pcommunityshots : string = "";
  ngOnInit() { 
    console.log(this.cli.bspcommunityshots.subscribe(pcommunityshots=>{this.pcommunityshots=pcommunityshots}))
  this.cli.bspcommunityshots.subscribe(pcommunityshots=>{this.pcommunityshots=pcommunityshots});
 }

}
