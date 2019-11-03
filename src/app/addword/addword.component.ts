import { Component, OnInit } from '@angular/core';
//import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireDatabase} from 'angularfire2/database';

import { Observable } from 'rxjs/internal/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-addword',
  templateUrl: './addword.component.html',
  styleUrls: ['./addword.component.css']
})
export class AddwordComponent implements OnInit {


  ngOnInit() {

  }

  title = 'english';
  description ="Angular-fire-demo";
  itemsValue ="";
  items : Observable<any[]>;
  data = <any>[];
  English : String = '';
  Punjabi: String = '';
  Meaning : String = '';
  constructor(public db : AngularFireDatabase,public db1: AngularFirestore){
    this.items = db.list('items').valueChanges();
    //this.test = db1.collection('/words').valueChanges()
  }

  onSubmit(){
    this.data = {
      English : this.English,
      Punjabi: this.Punjabi,
      Meaning :  this.Meaning
    }
    console.log(this.data)
    this.db1.collection('/words').add({content:this.data});
    this.itemsValue ='';
    this.English = "";
    this.Punjabi = "";
    this.Meaning = "";
    
  }
}

