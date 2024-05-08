import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
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
  /**
   * @param rootFormGroup inject rootFormGroup
   */
  constructor() {}

  @Input()
  item!: QuestionaireItem;
  @Input()
  form!: FormGroup;
  formControlName!: string;

  today = new Date();

  ngOnInit(): void {
    // We have to have a form, otherwise a runtime error will happen
    // "Error: formControlName must be used with a parent formGroup directive."
    this.formControlName = `item_${this.item?.linkId}`;
  }
}
