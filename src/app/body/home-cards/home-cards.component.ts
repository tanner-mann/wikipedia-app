import { Component, Input } from '@angular/core';

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
