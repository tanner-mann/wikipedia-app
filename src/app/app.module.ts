import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopbarComponent } from './header/topbar.component';
import { BrandingComponent } from './header/branding/branding.component';
import { SearchComponent } from './header/search/search.component';
import { RightDropdownComponent } from './header/right-dropdown/right-dropdown.component';
import { LeftDropdownComponent } from './header/left-dropdown/left-dropdown.component';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';
import { SecondNavComponent } from './header/second-nav/second-nav.component';
import { WelcomeBoxComponent } from './body/welcome-box/welcome-box.component';
import { TalkPageComponent } from './pages/talk-page/talk-page.component';
import { SourcePageComponent } from './pages/source-page/source-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { FeaturedArticleComponent } from './body/featured-article/featured-article.component';
import { InTheNewsComponent } from './body/in-the-news/in-the-news.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HomeCardsComponent } from './body/home-cards/home-cards.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BrandingComponent,
    SearchComponent,
    RightDropdownComponent,
    LeftDropdownComponent,
    LayoutMainComponent,
    SecondNavComponent,
    WelcomeBoxComponent,
    TalkPageComponent,
    SourcePageComponent,
    HistoryPageComponent,
    MainPageComponent,
    CreateAccountPageComponent,
    LogInPageComponent,
    FeaturedArticleComponent,
    InTheNewsComponent,
    UserInfoComponent,
    HomeCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
