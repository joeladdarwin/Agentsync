import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import{ AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],

})
export class EditprofileComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  url;
  constructor (private afStorage: AngularFireStorage, private cli: ClientService) {}
   
    upload(event) {
    
      console.log("enter your click");
      this.cli.uploadprofileimage(event);
  
    }
  ngOnInit() {
    this.url = this.cli.geturl();
  }

}
 
