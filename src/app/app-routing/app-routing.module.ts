import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartButtonComponent } from '../components/start-button/start-button.component';
import { QuizPageComponent } from '../components/quiz-page/quiz-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: StartButtonComponent },
  { path: 'quiz', component: QuizPageComponent },
  // { path: 'home', component: StartButtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
