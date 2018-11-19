import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator, MAT_SORT_HEADER_INTL_PROVIDER } from '@angular/material';
import { AngularFirestore,QuerySnapshot } from 'angularfire2/firestore';
import { Observable,combineLatest, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { DatePipe } from '@angular/common';

import { map, filter, switchMap, take, tap, finalize } from 'rxjs/operators';
import { UrlResolver } from '@angular/compiler';
export interface Order {
  orderid:number;
propertytype:string;
street:string;
unit:any;
orderby:any;
comments:any;
accesscode:any;
city:string;
zip:string;
orders:any;
property:any;
squarefeet:string;
ordersprice:number
  visitingdate:Date;
  orderprice:number;

}
@Component({
  selector: 'app-adminpending',
  templateUrl: './adminpending.component.html',
  styleUrls: ['./adminpending.component.css'],
  providers: [DatePipe]
})
export class AdminpendingComponent {
  displayedColumns = ['no','building','address','date/time','ordervalue','status','edit/delete'];
  dataSource: MatTableDataSource<Order>; 

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  downloadurl: Observable<string>;
  uploadPercent:Observable<number>;
  property:any;
  photographyurl:any;
  uploads: any[];

  allPercentage: Observable<any>;
  files: Observable<any>;
  constructor(private datePipe: DatePipe,private afs: AngularFirestore, public dialog: MatDialog,public storage: AngularFireStorage) {
    
  }
  ngOnInit(){
   
    
  }
  ngAfterViewInit() 
  {
     this.afs.collection<Order>('orders', ref => ref.where
    ('status','==','pending' )).valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
 
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    
  }
  query(a){
    console.log(a);
   var docRef$= this.afs.collection<Order>('orders').doc(a);

   this.property = docRef$.ref.get().then(function (doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      return doc.data()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
  }
  singleimageupload(productname,event,orderid){
    const date=new Date();
 var urlarray=[];
    const fulldate=date.getFullYear()+'/'+(date.getMonth()+1);
    //const file = event.target.files[0];
    const filelist = event.target.files;
    for (const file of filelist) {
    const filePath = orderid+'/'+productname+'/'+fulldate+'/'+file.name;
   
    const task = this.storage.upload(filePath, file).then(()=>{
      const fileRef = this.storage.ref(filePath);
      const getDownloadURLl=fileRef.getDownloadURL().subscribe(url=>
      {
        const URL=url;
       
        urlarray.push(url);
     
          console.log(urlarray);
          
          this.afs.collection('orders').doc(orderid).update({
          
        
          Photography:urlarray,
        
      })
        
        
      })
      

    }
  
  )
}

  
  }
  multipleimageupload(productname,event,orderid) {
    const date=new Date();
    const fulldate=date.getFullYear()+'/'+(date.getMonth()+1)
    this.uploads = [];
    const filelist = event.target.files;
    const allPercentage: Observable<number>[] = [];
    var urlarray=[];

    for (const file of filelist) {
      
      const path = orderid+'/'+productname+'/'+fulldate+'/'+file.name;
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
console.log(ref.getDownloadURL())
      task.snapshotChanges().pipe(
        finalize(() =>{ 
        this.downloadurl = ref.getDownloadURL()
        console.log(ref.getDownloadURL())
        }
       )
     )
    .subscribe()
    console.log(ref.getDownloadURL())
    
urlarray.push(this.downloadurl);
    // console.log(urlarray);

      
      // for every upload do whatever you want in firestore with the uploaded file
      //const _t = task.then((f) => {
        // return f.ref.getDownloadURL().then((url) => {
          
        //   return this.afs.collection(`file/${orderid}`).add({
        //     name: f.metadata.name,
        //     url: url
        //   });
        
      

    }
  
    this.allPercentage = combineLatest(allPercentage)
      .pipe(
      map((percentages) => {
        let result = 0;
        for (const percentage of percentages) {
          result = result + percentage;
        }
        return result / percentages.length;
      }),
      tap(console.log)
      );

  }
update(a){
   this.afs.collection('orders').doc(a).update({
    status: 'completed'
  }).then(() => {
    alert('updated');
  })


}
delete(b) {
  this.afs.collection('orders').doc(b).delete().then(() => {
    alert('deleted');
  })
}

}


  
