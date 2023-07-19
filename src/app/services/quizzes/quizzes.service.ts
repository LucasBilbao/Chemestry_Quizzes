import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { URL } from '../../utils/constants';
import { LoadingService } from '../loading-service/loading.service';
import { Quiz } from '../../interfaces/quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  public quizzes$: ReplaySubject<Quiz[]> = new ReplaySubject<Quiz[]>(1);
  private _quizzes: Quiz[] = [];

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
  ) {
    this.fetchQuizzes();
  }

  fetchQuizzes(): void {
    this.loadingService.isLoading$.next(true);
    this.http.get<Quiz[]>(URL).subscribe((quizzes: Quiz[]) => {
      this._quizzes = quizzes;
      this.quizzes$.next(this._quizzes);
      this.loadingService.isLoading$.next(false);
    });
  }
}
