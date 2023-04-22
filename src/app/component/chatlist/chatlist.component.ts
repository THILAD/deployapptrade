import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/model/TicketModel';
import { TicketChatlistService } from 'src/app/Service/ticket-chatlist.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ServicesService } from 'src/app/Service/base-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {
  public chatdatalist: any
  public UrlImg = 'https://trading-api.herokuapp.com/api/image/avatar/'
  public imageSource: any
  constructor(
    private chatlistTicket: TicketChatlistService,
    private route: Router
  ) {
  }
  ngOnInit(): void {
    this.loadingPage()
  }

  loadingPage() {
    this.isGetListTicket()
  }
  loadImage(nameImg: any) {
    this.imageSource = this.UrlImg + nameImg
  }
  IsGotocgatDeatail(id:string) {
    this.route.navigate(["/chatdetail"], {
      queryParams: { _id: id },
    });
  }
  isGetListTicket() {
    this.chatlistTicket.isGetListTicketChatList().subscribe((result => {
      if (!result.data) {
        return result
      } else {
        this.chatdatalist = result.data
      }
    }))
  }

}
