import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from '../../model/questionaire';
import { AnswerComponent } from '../answer/answer.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-answer-wrapper',
  standalone: true,
  imports: [CommonModule, AnswerComponent, MatButtonModule],
  templateUrl: './answer-wrapper.component.html',
  styleUrl: './answer-wrapper.component.css',
})
export class AnswerWrapperComponent {
  @Input() answers!: Answer[];

  @Output() restForm: EventEmitter<any> = new EventEmitter();

  onReset() {
    this.restForm.emit();
  }
}
