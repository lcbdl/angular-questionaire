import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
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
  /**
   * @param rootFormGroup inject rootFormGroup
   */
  constructor() {}

  @Input()
  item!: QuestionaireItem;
  @Input()
  form!: FormGroup;
  formControlName!: string;

  ngOnInit(): void {
    // We have to have a form, otherwise a runtime error will happen
    // "Error: formControlName must be used with a parent formGroup directive."
    this.formControlName = `item_${this.item?.linkId}`;
  }
}
