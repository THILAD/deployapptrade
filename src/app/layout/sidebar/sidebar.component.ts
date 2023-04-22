import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsermanagerService } from 'src/app/Service/usermanager.service';
import { MiddleWereService } from 'src/app/utils/parseToken';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public accoutdata:any
  public isFullname:any
  constructor(
    private route: Router,
    private getme:UsermanagerService,
    ) {}
    ngOnInit(): void {
      this.isGetMyself()
    }
  Ontrading(){
    
      this.route.navigateByUrl('/trading');
      
  }
isGetMyself(){
this.getme.isGetme().subscribe((r=>{
  console.log("isget profile",r);
  const data= r
 this.accoutdata=r
 const username=this.accoutdata.result.user.username
this.isFullname=username
//  console.log('username',username);
 
 
}))
  }

  RouterToUser(){
    console.log('click ok');
  this.route.navigateByUrl('/user/userlist');
 }
 Verified(){
  console.log('click ok');
this.route.navigateByUrl('/verified');
}
transfer(){
this.route.navigateByUrl('/transfer');

}
withdraw(){
this.route.navigateByUrl('/withdraw');

}
logout(){
this.route.navigateByUrl('/login');

}

ParseJwt(token: any) {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}
}
