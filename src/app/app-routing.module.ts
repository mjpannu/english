import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordsComponent } from 'src/app/words/words.component';
import { SentencesComponent } from 'src/app/sentences/sentences.component';
import { AddwordComponent } from 'src/app/addword/addword.component';


const routes: Routes = [
  {
    path:'words', component: WordsComponent
  },
  {
    path:'', component: WordsComponent
  },
  {
    path:'addword', component: AddwordComponent
  },
  {
    path:'sentences', component:SentencesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WordsComponent,SentencesComponent,AddwordComponent]