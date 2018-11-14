import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from '@angular/core';
import{AngularFireDatabaseModule} from'angularfire2/database';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { AdminGuard } from '../app/shared/admin.guard';


import {  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule } from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { HttpClientModule } from '@angular/common/http';


import { environment } from "../environments/environment";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule,   ReactiveFormsModule,  }   from '@angular/forms';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AppComponent } from './app.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { PlaceorderComponent } from './client/placeorder/placeorder.component';
import { InvoiceComponent } from './client/invoice/invoice.component';
import { AddressComponent } from './client/address/address.component';
import { AddonsComponent } from './client/addons/addons.component';
import { ProductsComponent } from './client/products/products.component';
import { MeetComponent } from './client/meet/meet.component';
import { VisitingdateComponent } from './client/visitingdate/visitingdate.component';
import { VisitingtimeComponent } from './client/visitingtime/visitingtime.component';
import { SquarefeetComponent } from './client/squarefeet/squarefeet.component';
import { CommentsComponent } from './client/comments/comments.component';
import { RevieworderComponent } from './client/revieworder/revieworder.component';
import { UpdateorderComponent } from './client/updateorder/updateorder.component';
import { MyorderComponent } from './client/myorder/myorder.component';
import { ProfileComponent } from './client/profile/profile.component';
import { EditprofileComponent } from './client/editprofile/editprofile.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AgentdashboardComponent } from './agent/agentdashboard/agentdashboard.component';
import { AgentloginComponent } from './agent/agentlogin/agentlogin.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './client/login/login.component';
import { ThanksComponent } from './client/thanks/thanks.component';
import { CompleteorderComponent } from './client/completeorder/completeorder.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdminsidenavComponent } from './admin/adminsidenav/adminsidenav.component';
import { AgentorderComponent } from './agent/agentorder/agentorder.component';

import { AgentregisterComponent } from './agent/agentregister/agentregister.component';
import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { ClientService } from './shared/client.service';
import { AdminService } from './shared/admin.service';
import { AgentService } from './shared/agent.service';
import { RegisterComponent } from './client/register/register.component';
import { ForgetComponent } from './client/forget/forget.component';
import { FooterComponent } from './client/footer/footer.component';
import { AccessComponent } from './client/access/access.component';
import { UnitsComponent } from './client/units/units.component';
import { AdmincompleteComponent } from './admin/admincomplete/admincomplete.component';
import { AdminuserComponent } from './admin/adminuser/adminuser.component';
import { AdminorderComponent } from './admin/adminorder/adminorder.component';
import { AdminorderhistoryComponent } from './admin/adminorderhistory/adminorderhistory.component';
import { AdminpaymentComponent } from './admin/adminpayment/adminpayment.component';
import { AdminscheduledComponent } from './admin/adminscheduled/adminscheduled.component';
import { AdminnewComponent } from './admin/adminnew/adminnew.component';
import { AdminpendingComponent } from './admin/adminpending/adminpending.component';
import { MyaccountComponent } from './client/myaccount/myaccount.component';
import { DeliveriesComponent } from './client/deliveries/deliveries.component';
import { DeliveryComponent } from './client/delivery/delivery.component';
import { Agentregister1Component } from './agent/agentregister1/agentregister1.component';
import { AddonvComponent } from './client/addonv/addonv.component';
import { PriceComponent } from './client/price/price.component';

import { AddonsvComponent } from './client/addonsv/addonsv.component';
import { AdmintableComponent } from './admin/admintable/admintable.component';
import { MainComponent } from './client/main/main.component';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    AddonsComponent,
    ProductsComponent,
    MeetComponent,
    VisitingdateComponent,
    VisitingtimeComponent,
    SquarefeetComponent,
    CommentsComponent,
    RevieworderComponent,
    UpdateorderComponent,
    MyorderComponent,
    InvoiceComponent,
    ProfileComponent,
    EditprofileComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    AgentdashboardComponent,
    AgentloginComponent,
    LoginComponent,
    ThanksComponent,
    RegisterComponent,
    ForgetComponent,
    AdminheaderComponent,
    AdminsidenavComponent,
    FooterComponent,
    AgentregisterComponent,
    DashboardComponent,
    NavbarComponent,
    PlaceorderComponent,
    AccessComponent,
    UnitsComponent,
    AdmincompleteComponent,
    AdminuserComponent,
    AdminorderComponent,
    AdminorderhistoryComponent,
    AdminpaymentComponent,
    AdminscheduledComponent,
    AdminnewComponent,
    AdminpendingComponent,
    MyaccountComponent,
    DeliveriesComponent,
    AgentorderComponent,
    Agentregister1Component,
    AddonvComponent,
    CompleteorderComponent,
    DeliveryComponent,
    PriceComponent,  
    AdmintableComponent,
    AddonsvComponent,
    MainComponent,
      
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    HttpClientModule,  
  
    FormsModule,
    ReactiveFormsModule, 
    AngularFireAuthModule, AngularFirestoreModule,AngularFireStorageModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('ngsw-worker.js'),
  ],
  providers: [AuthGuardService, AuthService, ClientService, AdminService, AgentService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);