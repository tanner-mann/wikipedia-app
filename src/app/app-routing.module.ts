import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SourcePageComponent } from './pages/source-page/source-page.component';
import { TalkPageComponent } from './pages/talk-page/talk-page.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'talk', component: TalkPageComponent },
  { path: 'source', component: SourcePageComponent },
  { path: 'history', component: HistoryPageComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'create_account', component: CreateAccountPageComponent },
  { path: 'log_in', component: LogInPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
