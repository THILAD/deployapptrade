import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UsermanagerService } from '../Service/usermanager.service';
import   Swal  from "sweetalert2";
@Component({
  selector: 'app-is-edituser',
  templateUrl: './is-edituser.component.html',
  styleUrls: ['./is-edituser.component.css']
})
export class IsEdituserComponent {
  @ViewChild('email') email:ElementRef;
  @ViewChild('username') username:ElementRef;
  @ViewChild('invitecode') invitecode:ElementRef;
  @ViewChild('role') role:ElementRef;
  // @ViewChild('password') password:ElementRef;



  public user_id: any
  public userlist: any
  // public email:string
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private usermanage: UsermanagerService,

  
  ) { }


  ngOnInit(): void {
    this.loadingrouter()
  

  }

  loadingrouter() {
    this.route.queryParams.subscribe((params: any) => {
      this.user_id = params.userid
      // console.log("6666666",params.userid);
    });
    this.isGetListUserByid()
  }

  success(){
    
  }
  isGetListUserByid() {
    const data = new idUser
    data.id = this.user_id
    this.usermanage.isGetListId(data).subscribe((res => {
      this.userlist = res.data[0]
      console.log(this.userlist);

    }))
  }

  isUpadteUser() {
    const email = this.email.nativeElement.value
    const username = this.username.nativeElement.value
    const invitecode = this.invitecode.nativeElement.value
    const permistion = this.role.nativeElement.value
    const dataUpadte = new DataUpadte
    dataUpadte.id= this.user_id
    dataUpadte.email=email
    dataUpadte.username=username
    dataUpadte.invitecode=invitecode
    dataUpadte.role=permistion
    // console.log('dataUpadte',dataUpadte);
   try {
    this.usermanage.isUpadateUser(dataUpadte).subscribe((res=>{
       console.log(res);
       if (res.status==1) {
        this.isSuccess()
        this.route.snapshot
        this.router.navigate(["user/userlist"])
       }else{
        this.isFailed()
       }
    }))
   } catch (error) {
    console.log(error);
    
   }

    
  }

isSuccess(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
}

isFailed(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
  
}
  onSubmit(){
    let email:string
    console.log(this.email);
    

  }
}

class idUser {
  id: number
}
class DataUpadte {
  id: number
  email: string
  invitecode: number
  password: string
  role: string
  username: string
}