import { AsyncPipe, CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-wrapper',
  standalone: true,
  imports: [NgComponentOutlet, CommonModule, AsyncPipe],
  templateUrl: './question-wrapper.component.html',
})
export class QuestionWrapperComponent {
  @Input()
  question!: { component: any; inputs: any };

  ngOnInit() {
    console.log(this.question);
  }
}
