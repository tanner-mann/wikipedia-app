import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './header/topbar.component';
import { BrandingComponent } from './header/branding/branding.component';
import { SearchComponent } from './header/search/search.component';
import { RightDropdownComponent } from './header/right-dropdown/right-dropdown.component';
import { LeftDropdownComponent } from './header/left-dropdown/left-dropdown.component';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';
import { SecondNavComponent } from './header/second-nav/second-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BrandingComponent,
    SearchComponent,
    RightDropdownComponent,
    LeftDropdownComponent,
    LayoutMainComponent,
    SecondNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
