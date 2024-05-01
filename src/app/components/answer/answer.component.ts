import { Component, Input } from '@angular/core';
import { Answer, QuestionaireItemType } from '../../model/questionaire';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css',
})
export class AnswerComponent {
  @Input()
  answer!: Answer;

  get isDate() {
    return this.answer.type === QuestionaireItemType.DATE;
  }
}
