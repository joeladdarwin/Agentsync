import { Injectable } from '@angular/core';
import { switchMap, finalize } from 'rxjs/operators';


import{ AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  uid:any;
  profilepicRef:any;
  downloadURL:any;
  uploadPercent:any;
  displayName:any;
  constructor(private afStorage: AngularFireStorage) {

}
}
