import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardInfo } from "../../body/home-cards/card-info.model";

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  private baseUrl: string = 'https://wikipedia-app-abfef-default-rtdb.firebaseio.com/';
  private mockCardEndpoint: string = 'mock-card.json'
  constructor(private http: HttpClient) {

  }
  getCardInfo() {
    return this.http.get<CardInfo[]>(this.baseUrl + this.mockCardEndpoint);
  }
}
