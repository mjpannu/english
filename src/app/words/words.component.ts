import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  words : Observable<any[]>;
  
  constructor(public db: AngularFirestore){
    this.words = db.collection('/words').valueChanges()
    console.log(this.words)
  }
  ngOnInit() {
  }

}

