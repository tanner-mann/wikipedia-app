import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createAccountModel } from "../pages/create-account-page/create-account.model";
import { UserInfo } from "./user-info.model";

@Injectable({providedIn: 'root'})
export class UserInfoService{
  private baseUrl:string = 'https://wikipedia-app-abfef-default-rtdb.firebaseio.com/';
  private myInfoEndpoint: string = 'my-info.json'
  private createAccountInfoEndpoint: string = 'create-acccount-info.json'
  constructor(private http: HttpClient) {

  }
  getUserInfo() {
    console.log(this.baseUrl + this.myInfoEndpoint);
    return this.http.get<UserInfo>(this.baseUrl + this.myInfoEndpoint);
  }

  modifyCreateAccount(data:createAccountModel) {
    return this.http.put(this.baseUrl + this.createAccountInfoEndpoint, data);
  }
}
