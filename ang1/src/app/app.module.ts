import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserAuthModule} from "./user-auth/user-auth.module"
import { AppComponent } from './app.component';
import { FirstcComponent } from './firstc/firstc.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
