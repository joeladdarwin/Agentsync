
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';


import { environment } from "../environments/environment";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule,   ReactiveFormsModule,  }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { PlaceorderComponent } from './client/placeorder/placeorder.component';
import { AddressComponent } from './client/address/address.component';
import { AddonsComponent } from './client/addons/addons.component';
import { ProductsComponent } from './client/products/products.component';
import { MeetComponent } from './client/meet/meet.component';
import { VisitingdateComponent } from './client/visitingdate/visitingdate.component';
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
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdminsidenavComponent } from './admin/adminsidenav/adminsidenav.component';



import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { ClientService } from './shared/client.service';
import { AdminService } from './shared/admin.service';
import { AgentService } from './shared/agent.service';
import { RegisterComponent } from './client/register/register.component';
import { ForgetComponent } from './client/forget/forget.component';
import { FooterComponent } from './client/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    PlaceorderComponent,
    AddressComponent,
    AddonsComponent,
    ProductsComponent,
    MeetComponent,
    VisitingdateComponent,
    SquarefeetComponent,
    CommentsComponent,
    RevieworderComponent,
    UpdateorderComponent,
    MyorderComponent,
    ProfileComponent,
    EditprofileComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    AgentdashboardComponent,
    AgentloginComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    AdminheaderComponent,
    AdminsidenavComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    MatBadgeModule,

  
  
    FormsModule,
    ReactiveFormsModule, 
  
  
    AngularFireAuthModule, AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AuthGuardService, AuthService, ClientService, AdminService, AgentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);