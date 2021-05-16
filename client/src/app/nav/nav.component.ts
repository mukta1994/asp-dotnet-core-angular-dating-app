import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service'
import { User } from '../_models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  
  constructor(public accountService: AccountService) { }

  ngOnInit() {
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
    },error => {
      console.log(error);
    })
  }

  logout(){
    this.accountService.logout()
  }

}