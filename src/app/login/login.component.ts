import { Component } from '@angular/core';
import { AuthService } from "../Service/authentication.service";
import { UserLogin } from "../model/userModel";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string
  password: string
  showalert:boolean
  constructor( private Auth: AuthService,private route: Router) {
  }
  onLogin() {
    this.showalert=true
    const data = new UserLogin()
    data.username = this.username;
    data.password = this.password;
    this.Auth.login(data).subscribe((result) => {
      console.log(result.token);
      
      if (result.success==true) {
        this.showalert=false
               localStorage.setItem('token',result.token)
               this.route.navigate(['/chatlist'])
      }else{
        return result
      }
    },
    (err) => {
      console.log("OKERRROORO",err.error)
      const msg=err.error.message
      this.alertfaled(msg)
    });
  //   try {
  //     this.Auth.adminlogin(data).subscribe((res => {
  //       console.log("is error",res.json());
  //       if (res.error.data) {
  //         alert("passwor wrong or mail wrong")
          
  //       }
  //       if (res.status==1) {
  //         this.alertsuccess()
  //         this.showalert=true
  // console.log('show alert',this.showalert);
  //         localStorage.setItem('ID',res.data.data.id)
  //         localStorage.setItem('token',res.data.Token)
  //         localStorage.setItem('username',res.data.data.username)
  //         localStorage.setItem('email',res.data.data.email)
  //         localStorage.setItem('invitecode',res.data.data.invitecode)
  //         localStorage.setItem('referent',res.data.data.referent)
  //         setTimeout(() => {
  //           this.route.navigate(['/trading'])
  //         }, 5000);
  //       }else{
  //         console.log(res);
          
  //         // console.log("login failed");
  //         alert("passwor wrong or mail wrong")
  //         this.showalert=false
  //         // setTimeout(() => {
  //         //   this.route.navigate(['/login'])
  
  //         // }, 1000);
  //       }
  //     }))
  //   } catch (error) {
  //     alert("passwor wrong or mail wrong")
  //     this.showalert=false
  //   }
  }

  alertsuccess() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been to Login.',
      showConfirmButton: false,
      timer: 1500
    })
  } 
   alertfaled(msg:any) {
    // Swal.fire("Login Falied", `${msg}`, "warning");
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text:  `${msg}`,
    })
  }
  getTimelogin(){
    
  }
  keyupGetEmail(e: KeyboardEvent) {
    this.username = (e.target as HTMLInputElement).value
  }
  keyupGetpassword(e: KeyboardEvent) {
    this.password = (e.target as HTMLInputElement).value
  }
}
