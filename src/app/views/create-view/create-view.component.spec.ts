
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateViewComponent} from './create-view.component';
import {TranslateFakeLoader, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {FormioModule} from 'angular-formio';
import {FormioHelper} from '../../shared/utils';
import {Observable} from 'rxjs/Observable';

import data from './entryForm.json';



let fixture: ComponentFixture<CreateViewComponent>;
let component: CreateViewComponent;

describe('CreateViewComponent', () => {
  beforeEach(async(setupTest));
  it('given formInJson when update select component value then should change select component values', () => {
    component.createFormJson = Observable.of(data);
    fixture.detectChanges();
    fixture.whenRenderingDone()
      .then(value => {
        const input = fixture.debugElement.nativeElement.querySelector('input[name="data[firstName]"]');
        expect(input.name).toBe('data[firstName]');
      });
  });

});

function setupTest() {
  return TestBed.configureTestingModule({
    imports: [
      FormioModule,
      TranslateModule.forRoot({
        loader: {provide: TranslateLoader, useClass: TranslateFakeLoader}
      })
    ],
    declarations: [CreateViewComponent],
    providers: [FormioHelper.localTypeFormioConfigProvider()]
  })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(CreateViewComponent);
      component = fixture.componentInstance;
    });
}
