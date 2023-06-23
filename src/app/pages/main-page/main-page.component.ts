import { Component } from '@angular/core';
import { Card } from '../../body/card.model';
import { mock_card } from '../../body/mock-card';
import { MainPageService } from './main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  cards: Card[] = [];

  constructor(private mainPageService: MainPageService) {
    for (var card of mock_card) {
      this.cards.push(new Card(card));
    }
  }
}
