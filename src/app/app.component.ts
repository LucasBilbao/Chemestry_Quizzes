import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading-service/loading.service';
import { QuizzesService } from './services/quizzes/quizzes.service';

@Component({
  selector: 'cq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isLoading: boolean = true;

  constructor(
    private loadingService: LoadingService,
    private quizzesService: QuizzesService,
  ) {}

  ngOnInit(): void {
    this.loadingService.isLoading$.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });
  }
}
