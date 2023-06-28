import { Component } from '@angular/core';
import { UserInfoService } from '../../user-info/user-info.service';
import { createAccountModel } from './create-account.model';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.css']
})
export class CreateAccountPageComponent {

  constructor(private InfoService: UserInfoService) {

  }
  createAccount(data: createAccountModel) {
    console.log("button pressed");
    console.log(data);
    this.InfoService.modifyCreateAccount(data).subscribe(data => {
      console.log("Account information sent to backened");
    })
  }

}
