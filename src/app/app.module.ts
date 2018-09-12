
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


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




import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { RegisterComponent } from './client/register/register.component';
import { ForgetComponent } from './client/forget/forget.component';
import { ClientService } from './shared/client.service';
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
    
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
 

   
  ],
  providers: [AuthGuardService,ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);