import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BarRatingModule } from "ngx-bar-rating";
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { NpsService } from './core/nps.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { CustomMaterialModule } from './core/material.module';

export const firebaseConfig = {
  apiKey: "AIzaSyBnu3vGZ_0jnayTq-2flezNJB9tClljOes",
  authDomain: "testenps-dd817.firebaseapp.com",
  databaseURL: "https://testenps-dd817.firebaseio.com",
  projectId: "testenps-dd817",
  storageBucket: "testenps-dd817.appspot.com",
  messagingSenderId: "44535758902"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    BarRatingModule
  ],
  providers: [AuthService, UserService, NpsService, UserResolver, AuthGuard, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }

