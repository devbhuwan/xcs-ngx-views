import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateViewComponent} from './create-view.component';
import {TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {FormioModule} from 'angular-formio';
import {DebugElement, Injector} from '@angular/core';
import {FormioHelper} from '../../shared/utils';

describe('CreateViewComponent', () => {
  let component: CreateViewComponent;
  let fixture: ComponentFixture<CreateViewComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let translate: TranslateService;
  let injector: Injector;
  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      imports: [
        FormioModule,
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useClass: TranslateFakeLoader}
        })
      ],
      declarations: [CreateViewComponent],
      providers: [FormioHelper.localTypeFormioConfigProvider()]
    });
    fixture = TestBed.createComponent(CreateViewComponent);
    component = fixture.componentInstance;
    translate = injector.get(TranslateService);
    de = fixture.debugElement;
    el = de.nativeElement;
  });

  it('given formInJson when update select component value then should change select component values', function () {
  });
});
