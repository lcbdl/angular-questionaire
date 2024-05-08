import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { SpectatorHost, createHostFactory } from '@ngneat/spectator';
import {
  QuestionaireItem,
  QuestionaireItemType,
} from '../../model/questionaire';
import { DateFieldComponent } from './date-field.component';

fdescribe('DateFieldComponent', () => {
  let spectator: SpectatorHost<DateFieldComponent>;

  const createHost = createHostFactory({
    component: DateFieldComponent,
    providers: [FormGroupDirective],
  });

  beforeEach(() => {
    const form = new FormGroup({
      item_id1: new FormControl(''),
    });
    const item: QuestionaireItem = {
      linkId: 'id1',
      text: 'DOB',
      type: QuestionaireItemType.DATE,
    };
    spectator = createHost(`<app-date-field [form]="form" [item]="item"/>`, {
      hostProps: {
        form,
        item,
      },
    });
  });

  it('Should create the component', () => {
    expect(spectator.component).toBeDefined();
    expect(spectator.query('mat-datepicker')).toBeDefined();
  });

  it('Should not accept future date', () => {
    const input = spectator.query('input');
    expect(input).toBeDefined();
    spectator.typeInElement('01/01/2099', input!);
    spectator.detectChanges();
    expect(spectator.query('.ng-invalid')).not.toBeNull();
  });

  it('Should accept past date', () => {
    const input = spectator.query('input');
    expect(input).toBeDefined();
    spectator.typeInElement('01/01/2009', input!);
    spectator.detectChanges();
    expect(spectator.query('.ng-invalid')).toBeNull();
  });
});
