
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { Component, AfterViewInit, ViewChild , OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator, MAT_SORT_HEADER_INTL_PROVIDER } from '@angular/material';
import { AngularFirestore,QuerySnapshot } from 'angularfire2/firestore';
import { Observable,combineLatest, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AngularFireAuth } from 'angularfire2/auth';
import { map, filter, switchMap, take, tap } from 'rxjs/operators';
import{ AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],

})
export class EditprofileComponent implements OnInit {
  downloadURL : Observable<string | null>;
  profilepicRef: any;
  uid;
  property:any;
  name: any;
  email: any;
  phone: any;
  profile: any;
  brokerage: any;
  phonenumber: number;
  url:any;
  uploads: any[];
  allPercentage: Observable<any>;
  files: Observable<any>;
  constructor (private afAuth : AngularFireAuth,private afStorage: AngularFireStorage, private cli: ClientService, private auth:AuthService,private afs: AngularFirestore,public storage: AngularFireStorage) {}
   
    upload(event) {
      var uid = this.auth.currentUserId;
      console.log(uid);
      this.uploads = [];
    const filelist = event.target.files;
    const allPercentage: Observable<number>[] = [];

    for (const file of filelist) {

      const path = this.auth.currentUserId+'/'+this.auth.displayName;
      const ref = this.storage.ref(path);
      const task = this.storage.upload(path, file);
      const _percentage$ = task.percentageChanges();
      allPercentage.push(_percentage$);

      // create composed object with different information. ADAPT THIS ACCORDING YOUR NEED
      const uploadTrack = {
        fileName: file.name,
        percentage: _percentage$
      }

      // push each upload into the array
      this.uploads.push(uploadTrack);

      // for every upload do whatever you want in firestore with the uploaded file
      const _t = task.then((f) => {
        return f.ref.getDownloadURL().then((url) => {
          return this.afs.doc(`users/${uid}`).update({
            name: f.metadata.name,
            url: url
          });
        })
      })

    }
  
    }
    
   
    
  ngOnInit() {
    this.name=this.auth.displayName;
    this.email=this.auth.email;
    this.profile = this.auth.users$;
  }
  
}
 
