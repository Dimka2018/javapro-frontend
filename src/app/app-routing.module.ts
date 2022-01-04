import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllArticlesComponent} from "../page/all_articles/all_articles.component";
import {AskQuestionComponent} from "../page/ask-question/ask_question.component";
import {EditArticleComponent} from "../page/edit-article/edit-article.component";

const routes: Routes = [
  { path: 'ask-question', component: AskQuestionComponent },
  { path: 'all-articles', component: AllArticlesComponent },
  { path: 'edit-article/:id', component: EditArticleComponent },
  { path: '',   redirectTo: '/all-articles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
