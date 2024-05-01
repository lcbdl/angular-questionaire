import { CommonModule, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { compact } from 'lodash';
import { AnswerWrapperComponent } from '../../components/answer-wrapper/answer-wrapper.component';
import { BooleanFieldComponent } from '../../components/boolean-field/boolean-field.component';
import { DateFieldComponent } from '../../components/date-field/date-field.component';
import { QuestionWrapperComponent } from '../../components/question-wrapper/question-wrapper.component';
import { SelectFieldComponent } from '../../components/select-field/select-field.component';
import { TextFieldComponent } from '../../components/text-field/text-field.component';
import {
  Answer,
  Questionaire,
  QuestionaireItem,
  QuestionaireItemType,
} from '../../model/questionaire';
import { QuestionaireService } from '../../services/questionaire.service';

@Component({
  selector: 'app-questionaire-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuestionWrapperComponent,
    MatButtonModule,
    AnswerWrapperComponent,
  ],
  templateUrl: './questionaire.component.html',
  styleUrl: './questionaire.component.css',
})
export class QuestionairePageComponent {
  public form!: FormGroup;
  public questionaireUiList!: { component: any; inputs: any }[];
  private questionaire!: Questionaire;
  public answers?: Answer[];

  public isValid = true;

  constructor(
    private questionaireService: QuestionaireService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // use service to load questionaire json file and convert to needed data format
    this.questionaireService.getQuestionaire().subscribe((questionaire) => {
      this.questionaire = questionaire;
      this.form = this.generateFormGroup(questionaire.item);
      this.questionaireUiList = this.generateDynamicForm(questionaire.item);
    });
  }

  /**
   * Generate formGroup dynamically based on the questionaire items
   * @param items Questionaire items
   * @returns
   */
  generateFormGroup(items: QuestionaireItem[]) {
    return this.formBuilder.group(
      items.reduce<{ [fieldName: string]: any }>((prev, cur) => {
        prev[`item_${cur.linkId}`] = [''];
        return prev;
      }, {})
    );
  }

  /**
   * Generate parameters values for dynamic form generation. Please look at quesiton-wrapper component
   * @param items Questionaire items
   * @returns
   */
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

  resetForm() {
    this.answers = undefined;
    this.isValid = true;
    this.form.reset();
  }

  validateForm(formValue: Object) {
    if (compact(Object.values(formValue)).length === 0) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
    return this.isValid;
  }

  onSubmit() {
    const formValue: { [key: string]: any } = this.form.value;
    if (this.validateForm(formValue)) {
      this.answers = compact(
        Object.keys(formValue).map((key) => {
          const linkKey = key.substring('item_'.length);
          const qItem = this.questionaire.item.find(
            (item) => item.linkId === linkKey
          );
          return qItem
            ? {
                linkId: qItem.linkId,
                text: qItem.text,
                type: qItem.type,
                answer:
                  qItem.type === QuestionaireItemType.DATE
                    ? formValue[key] instanceof Date
                      ? formatDate(formValue[key], 'longDate', 'en')
                      : null
                    : formValue[key],
              }
            : null;
        })
      );
    }
  }
}
