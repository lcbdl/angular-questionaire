import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { QuestionaireItem } from '../../model/questionaire';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './select-field.component.html',
})
export class SelectFieldComponent {
  @Input()
  item!: QuestionaireItem;

  @Input()
  formGroup!: FormGroup;

  get formControlName() {
    return `item_${this.item?.linkId}`;
  }
  get options() {
    return this.item.option ?? [];
  }
}
