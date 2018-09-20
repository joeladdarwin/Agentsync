import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate, Router  } from '@angular/router';
import { AdminGuard } from './shared/admin.guard';
import { AuthGuardService } from './shared/auth-guard.service';


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
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdminsidenavComponent } from './admin/adminsidenav/adminsidenav.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: 'main', component: DashboardComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'placeorder', component: PlaceorderComponent },
  { path: 'address', component: AddressComponent },
  { path: 'addons', component: AddonsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'meet', component: MeetComponent },
  { path: 'visitingdate', component: VisitingdateComponent },
  { path: 'squarefeet', component: SquarefeetComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'revieworder', component: RevieworderComponent },
  { path: 'updateorder', component: UpdateorderComponent },
  { path: 'myorder', component: MyorderComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'adlogin', component: AdminloginComponent, canActivate: [AdminGuard] },
  { path: 'addashboard', component: AdmindashboardComponent, canActivate: [AdminGuard] },
  { path: 'agdashboard', component: AgentdashboardComponent },
  { path: 'aglogin', component: AgentloginComponent },
  { path:'adheader', component: AdminheaderComponent},
  { path:'adsidenav', component: AdminsidenavComponent}
];

@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { 
  
}
