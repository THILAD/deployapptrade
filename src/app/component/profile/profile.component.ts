import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestwalletService } from 'src/app/Service/requestwallet.service';
import { UsermanagerService } from 'src/app/Service/usermanager.service';
import { WalletServiceService } from 'src/app/Service/wallet-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @ViewChild('amount') amount: ElementRef;
  @ViewChild('acountName') acountName: ElementRef;
  @ViewChild('bankName') bankName: ElementRef;
  @ViewChild('cardNumber') cardNumber: ElementRef;
  @ViewChild('description') description: ElementRef;

  @ViewChild('amountDeposit') amountDeposit: ElementRef;
  @ViewChild('descriptionDe') descriptionDe: ElementRef;


  public user_id: any
  public userData: any
  public walletData: any
  public walletDataAll: any
  public deposit: number
  public withdraw: number
  public ststusUser: any
  public wallet_total: number
  public sum_deposit: any
  public sum_withdraw: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wallet: RequestwalletService,
    private userMange: UsermanagerService,

  ) {

  }
  ngOnInit(): void {
    this.loadingPage()
  }

  loadingPage() {
    this.route
      .queryParams
      .subscribe(params => {
        const owner_id = params['userid']
        this.user_id = owner_id
        this.isGetListProfileCustomer(owner_id)
        this.sumByStatusIn(owner_id)
      
        this.isGetHistoryWallet(owner_id)
      });

  }
  loadingrouter() {
    this.route.queryParams.subscribe((params: any) => {
      this.user_id = params.userid
      // console.log("6666666",params.userid);
    });
  }

  isGetListProfileCustomer(_id: string) {
    const object = new getProfile
    object._id = _id
    console.log('send to server:', object);

    this.userMange.isGetprofilCustomer(object).subscribe((res => {
      if (res.success == true) {
        this.userData = res.data[0]
      } else {
        console.log('somthing wrong');
      }
    }))
  }

  isGetHistoryWallet(_id: string) {
    const object = new getDeposit
    object.owner = _id
    this.wallet.isGetHistoryWallet(object).subscribe(result => {
      if (result.success == true) {
        console.log('history wallet', result.data);
        this.walletDataAll = result.data
        let arr = result.data
        const sum = arr.reduce((accumulator: any, object: any) => {
          return accumulator + object.amount;
        }, 0);
        console.log('test sum', sum);
      } else {
        console.log('somthing wrong');
      }
    })
  }


  sumByStatusIn(_id: string) {
    const object = new getDeposit
    object.owner = _id
    object.status = "in"
    this.wallet.isGetSumAllByStstus(object).subscribe(result => {
      if (result.success == true) {
        let arr = result.data
        const sum = arr.reduce((accumulator: any, object: any) => {
          return accumulator + object.amount;
        }, 0);
        this.sum_deposit = sum
        this.sumByStatusOut(_id)
      } else {
        console.log('loading data failed palese contact admin');

      }
    })
  }

  sumByStatusOut(_id: string) {
    const object = new getDeposit
    object.owner = _id
    object.status = "out"
    this.wallet.isGetSumAllByStstus(object).subscribe(result => {
      if (result.success == true) {
        let arr = result.data
        const sum = arr.reduce((accumulator: any, object: any) => {
          return accumulator + object.amount;
        }, 0);
        const sunIn= this.sum_deposit
        console.log("sum OUT",sum);
        console.log("sum IN",this.sum_deposit);
        
        this.wallet_total = this.sum_deposit - sum
      console.log("wallet ToTal",this.wallet_total);
      
      } else {
        console.log('loading data failed palese contact admin');

      }
    })
  }


  isDepositRecharg() {
    const amout = parseInt(this.amountDeposit.nativeElement.value)
    const deposit = new Deposit
    deposit.ownerId = this.user_id
    deposit.amount = amout
    console.log("amountDeposit", deposit);
    const isCheck = FromValidate.valisdatedeposit(deposit)
    if (isCheck !== "true") {
      this.isValidateFrom(isCheck)
      this.loadingPage()
    } else {
      this.wallet.isRechargeDeposit(deposit).subscribe((res => {
        console.log("Recharger", res);

      }))

    }
  }
  isValidateFrom(isCheckisCheck: any) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${isCheckisCheck}`,
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
  isSuccess(data: any) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${data}`,
      showConfirmButton: false,
      timer: 2000
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

}

class Deposit {
  ownerId: string;
  amount: number
}
class Withdraw {
  customer_id: number
  payment_Type: number
  totalPayment: number
  receptPayment: any
  accountName: any
  accountCardNo: any
  bankName: any
  description: any

}
class getProfile {
  _id: string
}
class getDeposit {
  owner: string
  status: string
}

const failed = "data is emty"

export class FromValidate {
  public static valisdate(data: Withdraw) {
    if (Object.keys(data).length === 0) {
      return "data is Emty";
    }
    if (!data.customer_id) {
      return "customer_id" + failed;
    }
    if (!data.totalPayment && data.totalPayment == 0) {
      return "total Payment" + failed;
    }
    if (!data.accountName) {
      return "accountName " + failed;
    }
    if (!data.accountCardNo) {
      return "accountCardNo" + failed;
    }
    if (!data.bankName) {
      return "bankName" + failed;
    }
    if (!data.description) {
      return "description" + failed;
    }
    return "true";
  }
  public static valisdatedeposit(data: Deposit) {
    if (Object.keys(data).length === 0) {
      return "data is Emty";
    }
    if (!data.ownerId) {
      return "customer_id" + failed;
    }
    if (!data.amount && data.amount == 0) {
      return "total Payment" + failed;
    }
    return "true";
  }
}