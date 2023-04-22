import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PaginationService } from 'src/app/Service/pagination.service';
import { RequestwalletService } from 'src/app/Service/requestwallet.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  public UrlImg = 'https://trading-api.herokuapp.com/api/image/wallet/'
  public imageSource: any
  public walletdata: any
  public lengthCouter: number
  public page: number = 1;
  public limit: number = 10;
  public pageTotal: any
  public showEmtyPage: boolean
  public spinerLoading:boolean=false
  constructor(
    private wallet: RequestwalletService,
    private http: HttpClient,
    public pageingtation: PaginationService,
  ) {
  }
  ngOnInit(): void {
    this.isLoadingPage()
  }
  isLoadingPage() {
    this.isGetListByPage()
  }
  loadImage(nameImg: any) {
    this.imageSource = this.UrlImg + nameImg
  }
  isGetListByPage() {
    const data = new ListBypages
    data.limit = this.limit
    data.page = this.page
    data.type="deposit"
    this.spinerLoading=true
    this.wallet.isGetListRequestWalletPageAndType(data).subscribe(result => {
      console.log('result',result);
      
      if (result.count == 0) {
        this.dataEmty()
      } else if (result.data) {
        this.showEmtyPage = true
        this.walletdata = result.data
        this.spinerLoading=false
        const pageTotal = result?.pagination?.next?.page
        this.pageTotal = pageTotal
        console.log('pageTotal', this.pageTotal);
      } else {
        this.failedAlert()
        this.showEmtyPage = false
      }
      return result
    })
  }

  click_pagemodalTo(page: any) {
    console.log("selectPage", page);
    this.pageingtation.pageingtations;
    if (page) {
      this.page = page;
      this.isLoadingPage()

    }
  }

  isGetByApproveStatus(status:boolean){
    const object= new RequestApproveSatatus
    object.limit=10;
    object.page=1
    object.status=status
    object.type="deposit"
    this.spinerLoading=true
    try {
      this.wallet.isGetByApproveByStatus(object).subscribe((result => {
        console.log(result);
        if (result.success == true) {
          this.spinerLoading=false
          this.walletdata = result.data
          console.log('isGetByApproveStatus ',this.walletdata );
          this.spinerLoading=false
          const pageTotal = result?.pagination?.next?.page
          this.pageTotal = pageTotal
        }

      }))
    } catch (error) {
      console.log("error ", error);
    }
  }
  isApproveWallet(id: number) {
    try {
      this.wallet.isApproveWalletDeposit(id).subscribe((result => {
        if (result.success == true) {
          this.isLoadingPage()
        }

      }))
    } catch (error) {
      console.log("error ", error);
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
        this.isApproveWallet(id)
        Swal.fire(
          'approved   !',
          'Your file has been approved!.',
          'success'
        )
        this.isLoadingPage()
      }
    })
  }
  failedAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
  dataEmty() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Data is Emty!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
}
export class ListBypages {
  page: number;
  limit: number
  type:string

}
export class Excepted {
  admin_id: any;
  order_id: number
  approveStatus: string
}
export class RequestApproveSatatus{
  status:boolean;
  limit:number;
  page:number;
  type:string

}