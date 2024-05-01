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
