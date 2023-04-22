import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TradeModel } from 'src/app/model/tardeModel';
import { IstraderSeriviceService } from 'src/app/Service/istrader-serivice.service';
import * as moment from 'moment';
import { PaginationService } from 'src/app/Service/pagination.service';
@Component({
  selector: 'app-trading-page',
  templateUrl: './trading-page.component.html',
  styleUrls: ['./trading-page.component.css']
})

export class TradingPageComponent {
  public tradeDatalist: any
  public lengthCouter: number
  public selection=['Win','Lose','Auto']
  public isSelected = ''
  public itemSelected: TradeModel
  private _prevSelected: any;
  public limit: number =7;
  public page: number = 1;
  public pageTotal: any
  constructor(
    private isTrade: IstraderSeriviceService,
     private http: HttpClient,
    public pageingtation: PaginationService,

     ) {
  }
  ngOnInit(): void {
    this.islodingPage()
  }
islodingPage(){
  // this.isGetlistBypage()
// this.isGetlistBetFoerex()
this.isGetlistBetFoerexByPage()
}
isGetlistBetFoerex(){
  this.isTrade.getListBetForexAll().subscribe(res=>{
    const data :any=res
   this.tradeDatalist=data.data
    console.log('betforex', this.tradeDatalist);
  })
}
isGetlistBetFoerexByPage(){
  const object= new ListBypages
  object.page=this.page;
  object.limit=this.limit
  this.isTrade.getListBetForexPage(object).subscribe(result=>{
    const data :any=result
   this.tradeDatalist=data.data
    console.log('betforex page', result);
    const pageTotal = data?.pagination?.next?.page
    this.pageTotal = pageTotal
    console.log('pageTotal', this.pageTotal);
  })
}
click_pagemodalTo(page: any) {
  console.log("selectPage", page);
  this.pageingtation.pageingtations;
  if (page) {
    this.page = page;
    this.isGetlistBetFoerexByPage()
  }
}
handleChange(evt:any){
  // console.log("event change",evt);
  const value=evt.target.value
  console.log("event change",value);

  var target = evt.target;
  if (target.checked) {
    this._prevSelected = value;
  } else {
    this._prevSelected=''
  }
}

  changeDepartMENT(e: any, item: any) {
    console.log("value",e.target.value);
    console.log(item);
    this.itemSelected = item
    const selected = e.target.value
    if (selected == 1) {
      this.isSelected = 'w'
    } else if(selected == 3) {
      this.isSelected = 'r'
    }else{
      this.isSelected = 'l'

    }
    const defineAdminUpadte = new WinLoseUpadte()
    defineAdminUpadte.transetion_id=this.itemSelected.id;
    defineAdminUpadte.winlose=this.isSelected 

    const defineAdmin = new WinLose()
    defineAdmin.isDefindAdmin = this.isSelected 
    defineAdmin.transetion_id = this.itemSelected.id
    console.log('defineAdmin', defineAdmin);
    
    try {
      this.isTrade.isDefineAdminUpdate(defineAdminUpadte).subscribe((result => {
        console.log('result',result);
        
      }))
    } catch (error) {
      console.log(error);
    }

  }



}
export class ListBypages {
  page: number;
  limit: number
  // approveStatus: string

}

export class WinLose {
  transetion_id: number
  isDefindAdmin: string
}
export class WinLoseUpadte {
  transetion_id: number
  winlose: string
}