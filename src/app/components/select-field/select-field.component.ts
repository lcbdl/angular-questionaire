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
  constructor(private rootFormGroup: FormGroupDirective) {}
  @Input()
  item!: QuestionaireItem;
  form!: FormGroup;
  formControlName!: string;
  options!: ChoiceOption[];

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
    this.formControlName = `item_${this.item?.linkId}`;
    this.options = this.item.option ?? [];
  }
}
