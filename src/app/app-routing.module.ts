import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  } from "module";
import { ChatdetailComponent } from './component/chatdetail/chatdetail.component';
import { ChatlistComponent } from './component/chatlist/chatlist.component';
import { ProfileComponent } from './component/profile/profile.component';
import { TradingPageComponent } from './component/trading-page/trading-page.component';
import { TransferComponent } from './component/transfer/transfer.component';
import { UserpageComponent } from './component/userpage/userpage.component';
import { VerifiedListComponent } from './component/verified-list/verified-list.component';
import { WithdrawComponent } from './component/withdraw/withdraw.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { IsEdituserComponent } from './is-edituser/is-edituser.component';
import { LoginComponent } from "./login/login.component";
const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch: 'full'},
 { 
  path: 'login', component: LoginComponent,
  // path: '***', redirectTo: "/",

//   { path: 'login', component: LoginComponent },

  //  children:[
  //   {path: 'Login', component: LoginComponent}
  //  ]
   },
  { path: 'dashboard', component: DashboradComponent },
  {path: '***', redirectTo: 'login'},
  { path: 'user/userlist', component: UserpageComponent},
//   children:[
//   //  {path: 'userlist', component: LoginComponent},
//    {path: 'edit', component: IsEdituserComponent},

//   ]
//  },
{ path: 'user/edit', component: IsEdituserComponent},

 {path: 'verified', component: VerifiedListComponent},
 {path: 'transfer', component: TransferComponent},
 {path: 'withdraw', component: WithdrawComponent},
 {path: 'trading', component: TradingPageComponent},
 {path: 'profile', component: ProfileComponent},
 {path: 'chatlist', component: ChatlistComponent},
 {path: 'chatdetail', component: ChatdetailComponent},







  // { path: 'Main',canActivate: [AuthGuardService], loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
];
// const routes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'dashboard', component: DashboradComponent },
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
