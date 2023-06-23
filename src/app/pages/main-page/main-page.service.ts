import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardInfo } from "./card-info.model";

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  static getCardInfo() {
      throw new Error('Method not implemented.');
  }
  private baseUrl: string = 'https://wikipedia-app-abfef-default-rtdb.firebaseio.com/';
  private mockCardEndpoint: string = 'mock-card/'
  private featured: string = 'featured.json'
  private language: string = 'language.json'
  private other: string = 'other.json'
  private sister: string = 'sister.json'
  constructor(private http: HttpClient) {

  }
  getCardInfo() {
    return this.http.get<CardInfo>(this.baseUrl + this.mockCardEndpoint + this.featured);
  }
}
