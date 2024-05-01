import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { QuestionaireItem } from '../../model/questionaire';

@Component({
  selector: 'app-boolean-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
  ],
  templateUrl: './boolean-field.component.html',
})
export class BooleanFieldComponent {
  @Input()
  item?: QuestionaireItem;

  @Input()
  formGroup!: FormGroup;

  get formControlName() {
    return `item_${this.item?.linkId}`;
  }
}
