import { Component } from '@angular/core';
import { card } from '../../body/card.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  card: card[] = [];
}
