import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllArticlesComponent} from "../page/all_articles/all_articles.component";
import {AskQuestionComponent} from "../page/ask_question/ask_question.component";

const routes: Routes = [
  { path: 'ask-question', component: AskQuestionComponent },
  { path: 'all-articles', component: AllArticlesComponent },
  { path: '',   redirectTo: '/all-articles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
