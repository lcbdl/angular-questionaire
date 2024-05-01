import { AsyncPipe, CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-wrapper',
  standalone: true,
  imports: [NgComponentOutlet, CommonModule, AsyncPipe, ReactiveFormsModule],
  templateUrl: './question-wrapper.component.html',
})
export class QuestionWrapperComponent {
  @Input()
  question!: { component: any; inputs: any };
  @Input()
  formGroup!: FormGroup;

  ngOnInit() {
    console.log(this.question);
  }
}
