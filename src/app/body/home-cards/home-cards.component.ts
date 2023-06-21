import { Component, Input } from '@angular/core';
import { Card } from '../card.model';
import { mock_card } from '../mock-card';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.css']
})
export class HomeCardsComponent {
  @Input()
  title!: string;

  @Input()
  imgPath!: string;

  @Input()
  imgCaption!: string;

  @Input()
  text!: string;
}
