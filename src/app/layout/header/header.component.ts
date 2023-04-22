import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private route: Router) {}
  
  RouterToUser(){
    console.log('click ok');
  this.route.navigateByUrl('/user/userlist');
 }
 chatbotPage(){
  console.log('click ok');
this.route.navigateByUrl('/chatlist');
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
onTrade(){
this.route.navigateByUrl('/trading');

}
}
