export class ListBypage{
    id:any
    page:number;
    limit:number
  }
  export class DepositModel{
    id:number;
    customer_id:number;
    payment_Type:number;
    totalPayment:string;
    receptPayment:string;
    accountName:string;
    accountCardNo:string
    approve_By:string;
    description:string
    status:string;
    approveStatus:string;
    createAt:string;
    updateAt:string;
  }

  export class WithdrawModel{
    id:number
    accountCardNo:string;
    accountName:string;
    approveStatus:string;
    approve_By:string;
    bankName:string;
    createAt:string;
    customer_id:number;
    description:string;
    payment_Type:string;
    receptPayment:string;
    status:string;
    totalPayment:string;
    updateAt:string
  }
