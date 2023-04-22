import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsermanagerService } from "../../Service/usermanager.service";
import Swal from "sweetalert2";
import { PaginationService } from 'src/app/Service/pagination.service';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  public dataList: Array<any> = []
  public ipAddress = '';
  public object_seach: string
  public limit: number =10;
  public page: number = 1;
  public pageTotal: any
  constructor(
    private usermanage: UsermanagerService,
     private http: HttpClient,
      private router: Router,
    public pageingtation: PaginationService,

      ) {
  }
  ngOnInit(): void {
    this.isLoadingPage()
  }
  isLoadingPage(){
    // this.getlistAll()
    this.getlistAllByPage()

  }
  edituser(id: number) {
    this.router.navigate(["user/edit"], {
      queryParams: { userid: id, },
    });
  }
  isPrfile(id: number) {
    this.router.navigate(["profile"], {
      queryParams: { userid: id, },
    });
  }
  getlistAll() {
    try {
      this.usermanage.getUserListAll().subscribe((r => {
        if (r.success == true) {
          const data = r.data
          this.dataList = data

        } else {
          console.log("somthing wrong", r);
          this.isFailed()
        }
      }))
    } catch (error) {
      console.log(error);
      this.isFailed()
    }
  }

  getlistAllByPage() {
    try {
      const object= new getListAdmin
      object.limit=this.limit;
      object.page=this.page;

      this.usermanage.getUserListAllPage(object).subscribe((result => {
        if (result.success == true) {
          console.log("select by pahe",result);
          
          const data = result.data
          const pageTotal = result?.pagination?.next?.page
          this.pageTotal = pageTotal
          console.log('pageTotal', this.pageTotal);
          this.dataList = data

        } else {
          this.isFailed()
        }
      }))
    } catch (error) {
      console.log(error);
      this.isFailed()
    }
  }

  click_pagemodalTo(page: any) {
    console.log("selectPage", page);
    this.pageingtation.pageingtations;
    if (page) {
      this.page = page;
      this.getlistAllByPage()
    }
  }
  isSuccess() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  isFailed() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })

  }



  getlistCustomer() {
    const data = new getListAdmin
    data.limit = 10;
    data.page = 1
    try {
      this.usermanage.isgetListCustomer(data).subscribe((r => {
        console.log(r);
        if (r.status === 1) {
          const data = r.data
          this.dataList = data.rows
        } else {
          this.isFailed()
        }
      }))
    } catch (error) {
      console.log(error);
      this.isFailed()
    }
  }

  isSeachCustomer() {
    const exdata = this.object_seach
    console.log('seaching', exdata);
    try {
      this.usermanage.isSeachCustomer(exdata).subscribe((r => {

        console.log('seach user', r);
        if (r.success ===true) {
          const data = r.data
          this.dataList = data
        } else {
           this.isFailed()
        }
      }))
    } catch (error) {
      console.log(error);

    }
  }
  keyupGetvalueSeach(e: KeyboardEvent) {
    this.object_seach = (e.target as HTMLInputElement).value
    // console.log( this.object_seach);
    // this.isSeachCustomer()

  }
  // getIPAddress() {
  //   this.http.get("http://api.ipify.org/?format=json").subscribe((res: any) => {
  //     this.ipAddress = res.ip;
  //     console.log(this.ipAddress);

  //   });
  // }
  onBlockUser(e: number) {
    const data = new Isactive
    data.id = e
    data.isActive = 2 //isblocked
    // console.log("block User", data);
    try {
      this.usermanage.isAvtiveuser(data).subscribe((res: any) => {
        this.getlistAll()
      });

    } catch (error) {
      console.log(error);
    }
  }

  sweetAlert() {

    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'Your work has been saved',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
  }
  UnBlockUser(e: number) {
    const data = new Isactive
    data.id = e
    data.isActive = 1 //isblocked
    try {
      this.usermanage.isAvtiveuser(data).subscribe((res: any) => {
        this.getlistAll()

      });

    } catch (error) {
      console.log(error);
    }
  }
}

class Isactive {
  isActive: number
  id: number
}

class getListAdmin {
  limit: number;
  page: number
}

class seach_object {
  seach_object: string;
}