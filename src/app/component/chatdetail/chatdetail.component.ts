import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketChatlistService } from 'src/app/Service/ticket-chatlist.service';
import { UsermanagerService } from 'src/app/Service/usermanager.service';

@Component({
  selector: 'app-chatdetail',
  templateUrl: './chatdetail.component.html',
  styleUrls: ['./chatdetail.component.css']
})
export class ChatdetailComponent implements OnInit {
  public owner_id: any
  public chatlistChat: any
  public userdetail: any
  public user_id: any
  public id: any

  public textMessaged: any
  constructor(
    private route: ActivatedRoute,
    private chatlistTicket: TicketChatlistService,
    private usermanage: UsermanagerService

  ) {

  }
  ngOnInit() {
    this.load()
  }
  load() {
    this.route
      .queryParams
      .subscribe(params => {
        const owner_id = params['_id']
        this.id = params['_id']
        this.isGetListTicket(owner_id)
        this.isGetUserDetail()
      });
  }
  isGetListTicket(id: any) {
    const object = new objectGetchat;
    object._id = id
    object.isClosed = false
    // console.log("get lsit id",object);
    this.chatlistTicket.isGetListTicketChatListByOwner(object).subscribe((result => {
      if (!result.data) {
        return result
      } else {
        this.chatlistChat = result?.data?.[0]?.chat
        const datalist = result?.data
        console.log("user chat ", this.chatlistChat);
        console.log("respone data", result);
      }
    }))
  }
  isGetUserDetail() {
    this.usermanage.isGetme().subscribe((r => {
      this.userdetail = r
      console.log('userdetail', this.userdetail);
      this.user_id = this.userdetail?.result?.user?._id
      console.log("admin_id", this.user_id);
    }))
  }
  isSendMessaged() {
    const object = new Messaged
    object.text = this.textMessaged
    object.id = this.id
    // console.log('send to server', object);
    this.chatlistTicket.sendMessaged(object).subscribe(result => {
      console.log("test",result);
    })
  }
  getMessaged(e: KeyboardEvent) {
    this.textMessaged = (e.target as HTMLInputElement).value
    console.log(this.textMessaged);
  }
}
export class objectGetchat {
  _id: string;
  isClosed: boolean
}
export class Messaged {
  text: string;
  id: string
}

