import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import {FormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
//import {AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import {AngularFireDatabaseModule} from 'angularfire2/database';

//import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import { AddwordComponent } from './addword/addword.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    AddwordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //firebase.initializeApp(firebaseConfig),    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
