import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { VerifiedModel } from 'src/app/model/verifiedModel';
import { PaginationService } from 'src/app/Service/pagination.service';
import { VerifiedService } from 'src/app/Service/verified.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verified-list',
  templateUrl: './verified-list.component.html',
  styleUrls: ['./verified-list.component.css']
})
export class VerifiedListComponent {
  public limit: number = 6;
  public page: number = 1;
  public pageTotal: any

  public verifiedData: any
  public completed: boolean
  public notverified: boolean
  public pending: boolean
  public status: string
  public loading = false;

  constructor(
    private Verified: VerifiedService,
     private http: HttpClient,
    public pageingtation: PaginationService,

     ) {
  }
  ngOnInit(): void {
    this.loadingPage()
  }
  loadingPage() {
    this.getlistVerified()

  }
  isGetlistBtststus(){
    const object= new verifiedBySTATUS
    object.status
    try {
      this.Verified.isGetVerifiedListAll(object).subscribe((r => {
        this.verifiedData = r.data
        const pageTotal = r?.pagination?.next?.page
        this.pageTotal = pageTotal
      }))
    } catch (error) {
      return error
    } 
  }
  getlistVerified() {
    const object= new ListBypage
    object.limit=this.limit;
    object.page=this.page;
    try {
      this.Verified.isGetVerifiedListAll(object).subscribe((r => {
        this.verifiedData = r.data
        const pageTotal = r?.pagination?.next?.page
        this.pageTotal = pageTotal
      }))
    } catch (error) {
      return error
    }
  }
  isRejected(id: string) {
    try {
      this.Verified.isRejectVeriflied(id).subscribe((result => {
        this.getlistVerified()
      }))
    } catch (error) {
    }
  }
  isgetListBysatus(status: string) {
    try {
      this.Verified.isGetListBySatus(status).subscribe((result => {
        console.log(result);
      }))
    } catch (error) {
      console.log(error);
    }
  }

  isApproveVerified(id: any) {
    try {
      this.Verified.isAaproveVeriflied(id).subscribe((result => {
      }))
    } catch (error) {
      console.log(error);
    }
  }
  click_pagemodalTo(page: any) {
    console.log("selectPage", page);
    this.pageingtation.pageingtations;
    if (page) {
      this.page = page;
      this.loadingPage()
    }
  }
  confrimAlert(id: any) {
    Swal.fire({
      title: 'Do you want Approve?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        this.isApproveVerified(id)
        Swal.fire(
          'approved   !',
          'Your file has been approved!.',
          'success'
        )
        this.loadingPage()
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    })
  }
  confrimAlertReject(id: any) {
    Swal.fire({
      title: 'Do you want Rejected?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        this.isRejected(id)
        Swal.fire(
          'Rejected   !',
          'Your file has been Rejected!.',
          'success'
        )
        this.loadingPage()
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    })
  }
}
export class Excepted {
  id: number;
  verified_status: string
}
export class verifiedBySTATUS{
  status: string
}
export class ListBystatus {
  id: any
  page: number;
  limit: number
  verified_status: string
}
export class ListBypage {
  id: any
  page: number;
  limit: number
}
