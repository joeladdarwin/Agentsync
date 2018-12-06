import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator, MAT_SORT_HEADER_INTL_PROVIDER, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY } from '@angular/material';
import { AngularFirestore,QuerySnapshot } from 'angularfire2/firestore';
import { AuthService } from '../../shared/auth.service';
import { Observable,combineLatest, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { DatePipe } from '@angular/common';
import { AngularFireAuth } from 'angularfire2/auth';
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
  userid:any;
  profile:any;
  progressBarValue;
  allPercentage: Observable<any>;
  files: Observable<any>;
  constructor(private afauth: AngularFireAuth,private afs: AngularFirestore, public dialog: MatDialog,public storage: AngularFireStorage) {
    
  }
  ngOnInit(){
   
    
  }
  ngAfterViewInit() 
  {
    this.userid = this.afauth.auth.currentUser.uid;
     this.afs.collection<Order>(`users/${this.userid}/orders`, ref => ref.where
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
    this.uploadPercent = this.storage.upload(filePath, file).percentageChanges();
    const task = this.storage.upload(filePath, file).then(()=>{
      const fileRef = this.storage.ref(filePath);
     
    
      const getDownloadURLl=fileRef.getDownloadURL().subscribe(url=>
      {
        const URL=url;
       
        urlarray.push(url);
     
          console.log(urlarray);
          console.log(productname)
          if(productname=='Photography')
          {
            this.afs.collection('orders').doc(orderid).update({
            Photography:urlarray
      })
      this.userid = this.afauth.auth.currentUser.uid;
      this.afs.collection(`users/${this.userid}/orders`).doc(orderid).update({
          
        Photography:urlarray
        
      
    })
  

    }
    else if(productname=='Video Tour')
    {
      this.afs.collection('orders').doc(orderid).update({
      Videotour:urlarray
})
this.userid = this.afauth.auth.currentUser.uid;
this.afs.collection(`users/${this.userid}/orders`).doc(orderid).update({
    
  Videotour:urlarray
  

})

    }
    else{
      this.afs.collection('orders').doc(orderid).update({
        Tour360:urlarray
  })
  this.userid = this.afauth.auth.currentUser.uid;
  this.afs.collection(`users/${this.userid}/orders`).doc(orderid).update({
      
   Tour360:urlarray
    
  
  })
      
    }
          
        
      })
      

    }
  
  )
  const uploadTask=this.storage.upload(filePath, file);
  uploadTask.percentageChanges().subscribe((value) => {
    this.progressBarValue = value.toFixed(2);
  })
 
}

  }
 
update(a){
   this.afs.collection('orders').doc(a).update({
    status: 'completed'
  }).then(() => {
   
  })
  this.afs.collection(`users/${this.userid}/orders`).doc(a).update({
    status: 'completed'
  }).then(() => {
    alert('updated');
  })

}
delete(b) {
  this.afs.collection('orders').doc(b).delete().then(() => {
    
  })
  this.afs.collection(`users/${this.userid}/orders`).doc(b).delete().then(() => {
    alert('deleted');
  })
}

}


  
