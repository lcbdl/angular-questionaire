import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { QuestionaireItem } from '../../model/questionaire';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-date-field',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './date-field.component.html',
})
export class DateFieldComponent {
  @Input()
  item!: QuestionaireItem;
  @Input()
  formGroup!: FormGroup;

  get formControlName() {
    return `item_${this.item?.linkId}`;
  }
}
