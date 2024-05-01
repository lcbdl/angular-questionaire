import { AsyncPipe, CommonModule, NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BooleanFieldComponent } from '../../components/boolean-field/boolean-field.component';
import { DateFieldComponent } from '../../components/date-field/date-field.component';
import { TextFieldComponent } from '../../components/text-field/text-field.component';
import {
  Questionaire,
  QuestionaireItem,
  QuestionaireItemType,
} from '../../model/questionaire';
import { QuestionaireService } from '../../services/questionaire.service';
import { SelectFieldComponent } from '../../components/select-field/select-field.component';
import { QuestionWrapperComponent } from '../../components/question-wrapper/question-wrapper.component';
import questionaire from '../../../assets/questionaire.json';

@Component({
  selector: 'app-questionaire',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, QuestionWrapperComponent],
  templateUrl: './questionaire.component.html',
  styleUrl: './questionaire.component.css',
})
export class QuestionaireComponent {
  public form!: FormGroup;
  public questionaireUiList!: { component: any; inputs: any }[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.generateFormGroup(questionaire.item as QuestionaireItem[]);
    this.questionaireUiList = this.generateDynamicForm(
      questionaire.item as QuestionaireItem[]
    );
  }

  generateFormGroup(items: QuestionaireItem[]) {
    return this.formBuilder.group(
      items.reduce<{ [fieldName: string]: any }>((prev, cur) => {
        prev[`item_${cur.linkId}`] = [''];
        return prev;
      }, {})
    );
  }

  generateDynamicForm(items: QuestionaireItem[]) {
    const result = items.map((item) => {
      const inputs = {
        item,
      };
      switch (item.type) {
        case QuestionaireItemType.BOOLEAN:
          return {
            component: BooleanFieldComponent,
            inputs,
          };

        case QuestionaireItemType.CHOICE:
          return {
            component: SelectFieldComponent,
            inputs,
          };

        case QuestionaireItemType.DATE:
          return {
            component: DateFieldComponent,
            inputs,
          };
        default:
          return {
            component: TextFieldComponent,
            inputs,
          };
      }
    });
    return result;
  }

  onSubmit() {
    console.warn(this.form?.value);
  }
}
