import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../../services/quizzes/quizzes.service';
import { Quiz } from '../../interfaces/quiz';

@Component({
  selector: 'cq-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent implements OnInit {
  public quizzes!: Quiz[];
  public activeQuizIndex: number = -1;
  public chosenOption: number = -1;
  public hasBeenChecked: boolean = false;
  public score: number = 0;

  constructor(private quizzesService: QuizzesService) {}

  ngOnInit(): void {
    this.quizzesService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizzes = quizzes;
      this.activeQuizIndex = 0;
    });
  }

  public updateChosenOption(chosen: number): void {
    if (this.hasBeenChecked) {
      return;
    }
    this.chosenOption = chosen;
  }

  public onCheckClick(): void {
    this.hasBeenChecked = true;
    if (
      this.quizzes[this.activeQuizIndex].options[this.chosenOption] ===
      this.quizzes[this.activeQuizIndex].answer
    ) {
      this.score++;
    }
  }

  public onNextClick() {
    if (this.activeQuizIndex === this.quizzes.length - 1) {
      return;
    }
    this.chosenOption = -1;
    this.hasBeenChecked = false;
    this.activeQuizIndex++;
  }
}
