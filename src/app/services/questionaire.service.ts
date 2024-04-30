import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questionaire } from '../model/questionaire';
import { ApiService } from './api.service';
import { ErrorResponseAdapter } from './error-response.adapter';
import adaptError from './adapt-error.operator';

@Injectable({
  providedIn: 'root',
})
export class QuestionaireService {
  private url = '../../../assets/questionaire.json';

  constructor(
    private api: ApiService,
    private errorAdapter: ErrorResponseAdapter
  ) {}

  getQuestionaire(): Observable<Questionaire> {
    return this.api.get(this.url).pipe(adaptError(this.errorAdapter));
  }
}
