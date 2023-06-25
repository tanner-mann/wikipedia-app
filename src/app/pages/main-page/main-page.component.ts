import { Component, OnInit } from '@angular/core';
import { CardInfo } from '../../body/home-cards/card-info.model';
import { Card } from '../../body/home-cards/card.model';
import { MainPageService } from './main-page.service';
import { mock_card } from './mock-card';

var data = {
   items: [{
      title: "Today's featured picture",
      imgPath: "/assets/traffic.jpg",
      imgCaption: "Video credit: Sea Cow",
       text: "The Jane Byrne Interchange (previously known as the Circle Interchange) is a major freeway interchange in Chicago, in the U.S. state of Illinois. Located just outside the Chicago Loop, it is the junction between the Dan Ryan Expressway, the Kennedy Expressway, the Eisenhower Expressway, and the Ida B. Wells Drive. In a dedication ceremony held on August 29, 2014, the interchange was renamed in honor of Jane Byrne, a former mayor of Chicago. This video shows a moving aerial view of traffic on the Jane Byrne Interchange, shortly before the completion of a reconfiguration of the junction that was begun in 2013. "
    },
    {
      title: "Other areas of Wikipedia",
      imgPath: "",
       imgCaption: "",
       text: "Community portal – The central hub for editors, with resources, links, tasks, and announcements. Village pump – Forum for discussions about Wikipedia itself'' including policies and technical issues.Site news – Sources of news about Wikipedia and the broader Wikimedia movement."
    },
     {
      title: "Wikipedia's sister projects",
      imgPath: "",
      imgCaption: "",
     text: "Wikipedia is written by volunteer editors and hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other volunteer projects: "
    },
   {
      title: "Wikipedia languages",
      imgPath: "",
      imgCaption: "",
      text: "This Wikipedia is written in English. Many other Wikipedias are available; some of the largest are listed below."
  }]
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  cardInfo: CardInfo[] | undefined;
  cards: Card[] = [];
  constructor(private mainPageService: MainPageService) {
    for (const card of data.items) {
      this.cards.push(new Card(card));
    }
  }
  ngOnInit(): void {
    console.log("Registering showCardInfo as a subscriber");
    this.showCardInfo();
  }

  showCardInfo() {
    return this.mainPageService.getCardInfo().subscribe((data: CardInfo[]) => {
      console.log(data);
      this.cardInfo = data;
    })
  }
}
