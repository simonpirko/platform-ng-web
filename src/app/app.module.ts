import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import { IndexComponent } from './index/index.component';
import { AuthorizationComponent } from './authorization/authorization.component';

const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'auth', component: AuthorizationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
