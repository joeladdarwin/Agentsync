
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { BehaviorSubject, Observable} from 'rxjs';
import { switchMap, finalize } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection,  } from 'angularfire2/firestore';



@Injectable({
  providedIn: 'root'
})

export class ClientService {
  displayName: string;
  constructor(private auth:AuthService, private router:Router,private afAuth:AngularFireAuth,private afss:AngularFirestore,private afStorage: AngularFireStorage,private afs:AngularFireStorage) { }
  private propertytype : string = "Property";
  private squarefeet : string = "Not updated";
  private appartmentunit: number = 1;
  private street : string = "";
  private city : string = "";
  private zip : string = "";
  private appartmentunitno : string = "no unit";
  private photography: any = null;
  private tour360: any = null;
  private singlepagewebsite: any = null;
  private brouchure4p25: any = null;
  private brouchure4p50: any = null;
  private brouchure8p25: any = null;
  private brouchure8p50: any = null;
  private videotour: any = null;
  private floorplanbw: any = null;
  private floorplanclr: any = null;
  private floorplansclrfre: any = null;
  private dsflyer50: any = null;
  private dsflyer100: any = null;
  private pcommunityshots : any = null;
  private ptwlightshots: any = null;
  private prushfee: any = null;
  private vcommunityshots: any = null;
  private vtwlightshots: any = null;
  private vrushfee: any = null;
  private orderarray : Array<any> = [];
  private paddonarray : Array<any> = [];
  private vaddonarray : Array<any> = [];
  private orderprice: any ;
  private paddonprice: any ;
  private vaddonprice:any ;
  private totalprice:any ;
  private accessproperty: any;
  private accesspropertycode: any;
  private orderquerynum:number;
  uploadPercent: Observable<number>;
  downloadURL : Observable<string | null>;
  profilepicRef: any;
  uid:string;
  private visitingtime: Date;
  private visitingdate: Date;
  private comment: any;
  private totalunits : Array<string> = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];
  public bspropertytype : BehaviorSubject<string> = new BehaviorSubject<string>(this.propertytype);
  public bssquarefeet : BehaviorSubject<string> = new BehaviorSubject<string>(this.squarefeet);
  public bsappartmentunit: BehaviorSubject<number> = new BehaviorSubject<number>(this.appartmentunit);
  public bsstreet : BehaviorSubject<string> = new BehaviorSubject<string>(this.street);
  public bscity : BehaviorSubject<string> = new BehaviorSubject<string>(this.city);
  public bszip : BehaviorSubject<string> = new BehaviorSubject<string>(this.zip);
  public bsappartmentunitno : BehaviorSubject<string> = new BehaviorSubject<string>(this.appartmentunitno);
  public bsphotography: BehaviorSubject<any> = new BehaviorSubject<any>(this.photography);
  public bstour360: BehaviorSubject<any> = new BehaviorSubject<any>(this.tour360);
  public bssinglepagewebsite: BehaviorSubject<any> = new BehaviorSubject<any>(this.singlepagewebsite);
  public bsbrouchure4p25: BehaviorSubject<any> = new BehaviorSubject<any>(this.brouchure4p25);
  public bsbrouchure8p25: BehaviorSubject<any> = new BehaviorSubject<any>(this.brouchure8p25);
  public bsbrouchure4p50: BehaviorSubject<any> = new BehaviorSubject<any>(this.brouchure4p50);
  public bsbrouchure8p50: BehaviorSubject<any> = new BehaviorSubject<any>(this.brouchure8p50);
  public bsvideotour: BehaviorSubject<any> = new BehaviorSubject<any>(this.videotour);
  public bsfloorplanbw: BehaviorSubject<any> = new BehaviorSubject<any>(this.floorplanbw);
  public bsfloorplanclr: BehaviorSubject<any> = new BehaviorSubject<any>(this.floorplanclr);
  public bsfloorplansclrfre: BehaviorSubject<any> = new BehaviorSubject<any>(this.floorplansclrfre);
  public bsdsflyer50: BehaviorSubject<any> = new BehaviorSubject<any>(this.dsflyer50);
  public bsorderquerynum: BehaviorSubject<number>= new BehaviorSubject<number>(this.orderquerynum);

public bsdsflyer100: BehaviorSubject<any> = new BehaviorSubject<any>(this.dsflyer100);
  public bspcommunityshots: BehaviorSubject<any> = new BehaviorSubject<any>(this.pcommunityshots);
  public bsptwlightshots: BehaviorSubject<any> = new BehaviorSubject<any>(this.ptwlightshots);
  public bsprushfee: BehaviorSubject<any> = new BehaviorSubject<any>(this.prushfee);
  public bsvcommunityshots: BehaviorSubject<any> = new BehaviorSubject<any>(this.vcommunityshots);
  public bsvtwlightshots: BehaviorSubject<any> = new BehaviorSubject<any>(this.vtwlightshots);
  public bsvrushfee: BehaviorSubject<any> = new BehaviorSubject<any>(this.vrushfee);
  public bsorderprice: BehaviorSubject<any> = new BehaviorSubject<any>(this.orderprice);
  public bspaddonprice: BehaviorSubject<any> = new BehaviorSubject<any>(this.paddonprice);
  public bsvaddonprice: BehaviorSubject<any> = new BehaviorSubject<any>(this.vaddonprice);
  public bstotalprice: BehaviorSubject<any> = new BehaviorSubject<any>(this.totalprice);
  public bsorderarray : BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.orderarray);
  public bspaddonarray : BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.paddonarray);
  public bsvaddonarray : BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.vaddonarray);
  public bsaccessproperty: BehaviorSubject<any> = new BehaviorSubject<any>(this.accessproperty);
  public bsaccesspropertycode: BehaviorSubject<any> = new BehaviorSubject<any>(this.accesspropertycode);
  public bsvisitingtime: BehaviorSubject<any> = new BehaviorSubject<any>(this.visitingtime);
  public bsvisitingdate: BehaviorSubject<any> = new BehaviorSubject<any>(this.visitingdate);
  public bscomment: BehaviorSubject<any> = new BehaviorSubject<any>(this.comment);
  // CommonCommon

  // End of 
 
  // Signup
  register(registerForm){
    return this.auth.registerclient(registerForm)
  }
  // End of Signup
  // Forget
  forget(){

  }
  // End of Forget
  //Login
  clientlogin(email,pass)
  {
    // this.uid$ = this.afAuth.auth.currentUser.uid;
    // console.log(this.getuserdata(this.uid$)+"isis")
    return this.auth.login(email, pass).catch(error => {

      throw error
    })   
  }
  signout(){
    this.auth.signOut()
    this.router.navigate(['/login'])
  }
  // Login End
  //navbar 

   getorderquerynums():any{

return this.auth.clientqueryorderlen()


     
   }
  // End navbar
  // Dashboard
  getuser(){
    console.log("jil");
    return
  } 
  getUsername()
  {
    return this.afAuth.auth.currentUser.displayName;
  }  
  

  
  // End of Dashboard
  // Property
  getpropertytype(): string {
    return this.propertytype
  }
  setpropertytype(propertytype): void {
    
    this.propertytype = propertytype;
    this.bspropertytype.next(this.propertytype);
  }
  // End of Property

  // Appartmentunit
  getappartmentunit():any{
    return this.appartmentunit
  }
  setappartmentunit(unit): void{
    console.log(unit);
    this.appartmentunit = unit;
    this.bsappartmentunit.next(this.appartmentunit)
    this.router.navigate(['/address']);
  }
  gotoplaceorder()
  {
    this.router.navigate(['/placeorder']);
  }
  // End of Appartment unit
  //Address
  
  
  updateaddress(address):void
  {

this.setstreet(address.street);
    this.setcity(address.city);
    this.setzip(address.zipCode);
    if(address.unit!=="")
    {
      this.setappartmentunitno(address.unit);
    }
    
    this.router.navigate(['/squarefeet'])
  }
  getstreet():string{
    return this.street
  }
  setstreet(unit):void {
    console.log("strret"+unit)
    this.street = unit;
    this.bsstreet.next(this.street)
  }
  getcity():string{
    return this.city
  }
  setcity(unit):void{
    this.city = unit;
    this.bscity.next(this.city)
  }
  getzip(unit):string{
    return this.zip
  }
  setzip(unit):void{
    this.zip = unit;
    this.bszip.next(this.zip)
  }
  getappartmentunitno(unit):string{
    return this.appartmentunitno
  }
  setappartmentunitno(unit):void{
    this.appartmentunitno = unit;
    this.bsappartmentunitno.next(this.appartmentunitno)
  }
  //End Address
  // Squarefeet
  get squarefeets(): string {
    return this.squarefeet
  }
  setsquarefeet(unit): void {
    console.log("sqft is"+unit);
    this.squarefeet = unit;
    this.bssquarefeet.next(this.squarefeet);
    console.log(this.squarefeets);
    this.setsinglepagewebsite(85); 
    this.setbrouchure4p25(125);
    this.setbrouchure4p50(155);
    this.setbrouchure8p25(215);
    this.setbrouchure8p50(245);
    this.setdsflyer50(75);
    this.setdsflyer100(95);
    this.setorderprice(0);
    this.setpaddonprice(0);
    this.setvaddonprice(0);
    this.setvcomshot(50)
    this.setvtwshot(50)
    this.setvruf(75)
    this.setpcommunityshots(50)
    this.setptwlightshots(50)
    this.setprushfee(75)
    
    if (unit === '0-750') {
      this.setphotography(145)
      this.settour360(125)
      this.setvideotour(255)
      this.setfloorplanbw(125)
      this.setfloorplanclr(165)
      this.setfloorplansclrfre(195)
    }

    if (unit === '751-1500') {
      this.setphotography(175)
      this.settour360(155)
      this.setvideotour(255)
      this.setfloorplanbw(155)
      this.setfloorplanclr(195)
      this.setfloorplansclrfre(215)
    }
    if (unit === '1501-2250') {
      this.setphotography(205)
      this.settour360(185)
      this.setvideotour(335)
      this.setfloorplanbw(185)
      this.setfloorplanclr(215)
      this.setfloorplansclrfre(245)
    }
    if (unit === '2251-3000') {
      this.setphotography(235)
      this.settour360(215)
      this.setvideotour(335)
      this.setfloorplanbw(215)
      this.setfloorplanclr(245)
      this.setfloorplansclrfre(275)
    }
    if (unit === '3001-3750') {
      this.setphotography(275)
      this.settour360(245)
      this.setvideotour(335)
      this.setfloorplanbw(245)
      this.setfloorplanclr(275)
      this.setfloorplansclrfre(305)
    }
    if (unit === '3751-4500') {
      this.setphotography(305)
      this.settour360(275)
      this.setvideotour(415)
      this.setfloorplanbw(275)
      this.setfloorplanclr(305)
      this.setfloorplansclrfre(335)
    }
    if (unit === '4501-5250') {
      this.setphotography(335)
      this.settour360(305)
      this.setvideotour(415)
      this.setfloorplanbw(305)
      this.setfloorplanclr(335)
      this.setfloorplansclrfre(375)

    }
    if (unit === '5251+') {
      this.setphotography('customprice')
      this.settour360('customprice')
      this.setvideotour('customprice')
      this.setfloorplanbw('customprice')
      this.setfloorplanclr('customprice')
      this.setfloorplansclrfre('customprice')
      this.setsinglepagewebsite('customprice');
      this.setbrouchure4p25('customprice');
      this.setbrouchure4p50('customprice');
      this.setdsflyer50('customprice');
      this.setdsflyer100('customprice');
      this.setbrouchure8p25('customprice');
      this.setbrouchure8p50('customprice');
      this.setorderprice('customprice');
      this.setpaddonprice('customprice');
      this.setvaddonprice('customprice');
      this.setpcommunityshots('customprice')
      this.setprushfee('customprice');
      this.setptwlightshots('customprice');
      this.setvcomshot('customprice');
      this.setvruf('customprice');
      this.setvtwshot('customprice');

     
    }
    this.bssquarefeet.next(this.squarefeet);
    this.router.navigate(['/products']);
  }

  // End of Squarefeet
  // products
  get orderpriceget():any{
      return this.orderprice
  }
  setorderprice(price) {
    this.orderprice = price;
    this.bsorderprice.next(this.orderprice);
  }
  setpaddonprice(price) {
    this.paddonprice = price;
    this.bspaddonprice.next(this.paddonprice);
  }
  setvaddonprice(price) {
    this.vaddonprice = price;
    this.bsvaddonprice.next(this.vaddonprice);

  }
  settotalprice(price) {
    this.totalprice = price;
    this.bstotalprice.next(this.totalprice);
  }
  gotoproducts()
  {
    this.router.navigate(['/products']);
  }
  gotosquarefeet()
  {
    this.router.navigate(['/squarefeet']);
  }
  getphotography() { return this.photography }
  gettour360() { return this.tour360 }
  getsinglepagewebsite() { return this.singlepagewebsite }
  getbrouchure4p25() { return this.brouchure4p25 }
  getbrouchure8p25() { return this.brouchure8p25 }
  getbrouchure4p50() { return this.brouchure4p50 }
  getbrouchure8p50() { return this.brouchure8p50 }
  getvideotour() { return this.videotour }
  getfloorplanbw() { return this.floorplanbw }
  getfloorplanclr() { return this.floorplanclr }
  getfloorplansclrfre() { return this.floorplansclrfre }
  getdsflyer50() { return this.dsflyer50 }
  getdsflyer100() { return this.dsflyer100 }
  setphotography(price) {
  this.photography = price;
    this.bsphotography.next(this.photography);
  }
  settour360(price) {
  this.tour360 = price;
    this.bstour360.next(this.tour360);
  }
  setsinglepagewebsite(price) {
  this.singlepagewebsite = price;
    this.bssinglepagewebsite.next(this.singlepagewebsite);
  }
  setbrouchure4p25(price) {
  this.brouchure4p25 = price;
    this.bsbrouchure4p25.next(this.brouchure4p25);
  }
  setbrouchure4p50(price) {
    this.brouchure4p50 = price;
    this.bsbrouchure4p50.next(this.brouchure4p50);
  }
  setbrouchure8p25(price) {
  this.brouchure8p25 = price;
    this.bsbrouchure8p25.next(this.brouchure8p25);
  }
  setbrouchure8p50(price) {
    this.brouchure8p50 = price;
    this.bsbrouchure8p50.next(this.brouchure8p50);
  }
  setvideotour(price) {
  this.videotour = price;
    this.bsvideotour.next(this.videotour);
  }
  setfloorplanbw(price) {
  this.floorplanbw = price;
    this.bsfloorplanbw.next(this.floorplanbw);
  }
  setfloorplanclr(price) {
  this.floorplanclr = price;
    this.bsfloorplanclr.next(this.floorplanclr);
  }
  setfloorplansclrfre(price) {
  this.floorplansclrfre = price;
    this.bsfloorplansclrfre.next(this.floorplansclrfre);
  }
  setdsflyer50(price) {
  this.dsflyer50 = price;
    this.bsdsflyer50.next(this.dsflyer50);
  }
  setdsflyer100(price) {
    this.dsflyer100 = price;
    this.bsdsflyer100.next(this.dsflyer100);
  }
  setordersarray(order: any): void {
    console.log(order);
    this.orderarray = order;
    console.log(this.orderarray);
    this.bsorderarray.next(this.bsorderarray.getValue().concat(this.orderarray));

    this.checkpaddons(order)
  }
  getordersarray():any
  {
    return this.orderarray;
  }
  checkpaddons(order: any): any {
    try {
      for (var i = 0; i < order.length; i++) {
        if (order[i][0] == "Photography") throw "photography"

      }
      throw "no photo"
    }
    catch (err) {
      if (err == "photography") {
        console.log("photography thrown")
        this.router.navigate(['/addonsp'])
      }
      if (err == "no photo") {
        console.log(err)
        try {
          for (var i = 0; i < order.length; i++) {
            if (order[i][0] == "Video Tour") throw "video"
          }
          throw "no video"
        }
        catch (errs) {
          if (errs == "video") {
            console.log("video thrown")
            this.router.navigate(['/addonsv'])
          }
          if (errs == "no video") {

            console.log("no videos")
            this.router.navigate(['/access'])

          }

        }

      }

    }


}
  checkvaddons(order: any): any {
    console.log("order is" );
    console.log(order);
 
    try {
      for (var i = 0; i < order.length; i++) {
        if (order[i][0] == "Video Tour") throw "video"
      }
      throw "no video"
    }
    catch (errs) {
      if (errs == "video") {
        console.log("video thrown")
        this.router.navigate(['/addonsv'])
      }
      if (errs == "no video") {

        console.log("no videos")
        this.router.navigate(['/access'])

      }

        }

      

    }

  setpaddonsarray(paddonsarray:any,order:any):void
  {
   this.bspaddonarray.next(this.bspaddonarray.getValue().concat([paddonsarray]));
  console.log(this.orderarray)
 
   this.checkvaddons(this.orderarray)
  }
  setvaddonsarray(vaddonsarray: any): void {
    this.bsvaddonarray.next(this.bsvaddonarray.getValue().concat([vaddonsarray]));
  this.router.navigate(['/access'])

  }
  // End of products

  //addonsphotography
  get communityshots():any{
    return this.pcommunityshots
  }
  setpcommunityshots(unit): void{
    this.pcommunityshots = unit;
    this.bspcommunityshots.next(this.pcommunityshots)
  }
  get phtwlightshots():any{
    return this.ptwlightshots
  }
  setptwlightshots(unit): void{
    this.ptwlightshots = unit;
    this.bsptwlightshots.next(this.ptwlightshots)
  }
  get phrushfee():any{
    return this.prushfee
  }
  setprushfee(unit): void{
    this.prushfee = unit;
    this.bsprushfee.next(this.prushfee)
  }


  //

  //addonsvideo
  
  get vcomshot():string{
    return this.vcommunityshots
  }
  get vtwshot():string{
    return this.vtwlightshots
  }
  get vruf():string{
    return this.vrushfee
  }
setvcomshot(price){
    this.vcommunityshots = price;
    this.bsvcommunityshots.next(this.vcommunityshots);

}
setvtwshot(price){
    this.vtwlightshots=price;
    this.bsvtwlightshots.next(this.vtwlightshots);

}
setvruf(price){
    this.vrushfee=price;
    this.bsvrushfee.next(this.vrushfee);
}
get addonvideo(): string {
    return this.squarefeet
  }



//end of video
//access 
  getaccessproperty(): string {
    return this.accessproperty
  }
  setaccessproperty(accessproperty): void {

    this.accessproperty = accessproperty;
    this.bsaccessproperty.next(this.accessproperty);
  }
  getaccesspropertycode(): string {
    return this.accesspropertycode
  }
  setaccesspropertycode(accesspropertycode): void {

    this.accesspropertycode = accesspropertycode;
    this.bsaccesspropertycode.next(this.accesspropertycode);
  }
  gotovisitingdate()
  {
    this.router.navigate(['/visitingdate']);
    console.log("visiting date");
  }

//end of access
// visiting date
updatevisitingdate(visitingdate)
{
  this.setvisitingdate(visitingdate)
  this.router.navigate(['/visitingtime'])
}
updatevisitingtime(visitingtime)
{
  this.setvisitingdate(visitingtime)
  this.router.navigate(['/comments'])
}
setvisitingdate(visitingdate): void {
    this.visitingdate = visitingdate;
    this.bsvisitingdate.next(this.visitingdate);
  
  }

// end of visiting date
// Comment
  getcomment(): string {
    return this.comment
  }
  setcomment(comment): void {

    this.comment = comment;
    console.log(this.comment);
    this.bscomment.next(this.comment)
    this.router.navigate(['/revieworder'])
   

  }
// end of comment
//profile pic change
uploadprofileimage(event)
{
  
  const file = event.target.files[0];
  const filePath = 'users/'+'profilepic/'+this.displayName;
  const fileRef = this.afStorage.ref(filePath);
  const task = this.afStorage.upload(filePath, file);

this.uploadPercent = task.percentageChanges();
  //  download URL 
  task.snapshotChanges().pipe(
    finalize(() => this.downloadURL = fileRef.getDownloadURL())
  )
    .subscribe()
  }

geturl()
{
  console.log("siindhushakshi"+ this.uid)
  this.profilepicRef = this.afStorage.ref('users/' + 'profilepic/' + this.uid);

  this.downloadURL = this.profilepicRef.getDownloadURL();
  
  return this.downloadURL
}
//
//  
getdoc(){
  return this.afss.collection('users').valueChanges();
}
//
 
  // End of products
  // revieworder
  setorder(order:any)
  {
    var a = this.auth.currentUserId;
    var d= new Date();
    var c = (d.getDate()).toString() + (d.getMonth() + 1).toString() + (d.getFullYear()).toString().substr(-2) + (d.getHours()).toString() + (d.getMinutes()).toString();  
    this.auth.clientcreateorder(c,a,order)
    console.log("worke")
  }
  // end of revieworder
}