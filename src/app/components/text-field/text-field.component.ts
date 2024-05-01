import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { QuestionaireItem } from '../../model/questionaire';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './text-field.component.html',
})
export class TextFieldComponent {
  /**
   * @param rootFormGroup inject rootFormGroup
   */
  constructor(private rootFormGroup: FormGroupDirective) {}

  @Input()
  item!: QuestionaireItem;
  form!: FormGroup;
  formControlName!: string;

  ngOnInit(): void {
    // We have to have a form, otherwise a runtime error will happen
    // "Error: formControlName must be used with a parent formGroup directive."
    this.form = this.rootFormGroup.control;
    this.formControlName = `item_${this.item?.linkId}`;
  }
}
