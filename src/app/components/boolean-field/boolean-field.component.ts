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
  constructor(private rootFormGroup: FormGroupDirective) {}
  @Input()
  item!: QuestionaireItem;
  form!: FormGroup;
  formControlName!: string;

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
    this.formControlName = `item_${this.item?.linkId}`;
  }
}
