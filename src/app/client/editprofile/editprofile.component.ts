import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
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
  name:any;
  email:any;

  constructor (private afStorage: AngularFireStorage, private cli: ClientService, private auth:AuthService) {}
   
    upload(event) {
    
      console.log("enter your click");
      this.cli.uploadprofileimage(event);
  
    }
  ngOnInit() {
    this.url = this.cli.geturl();
    this.name=this.auth.displayName;
    this.email=this.auth.email;
  }

}
 
