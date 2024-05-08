import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ChoiceOption, QuestionaireItem } from '../../model/questionaire';
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
  /**
   * @param rootFormGroup inject rootFormGroup
   */
  constructor() {}

  @Input()
  item!: QuestionaireItem;
  @Input()
  form!: FormGroup;
  formControlName!: string;
  options!: ChoiceOption[];

  ngOnInit(): void {
    // We have to have a form, otherwise a runtime error will happen
    // "Error: formControlName must be used with a parent formGroup directive."
    this.formControlName = `item_${this.item?.linkId}`;
    this.options = this.item.option ?? [];
  }
}
