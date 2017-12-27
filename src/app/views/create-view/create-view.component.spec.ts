import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateViewComponent} from './create-view.component';
import {TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {FormioAppConfig, FormioModule} from 'angular-formio';
import {DebugElement, Injector} from "@angular/core";

const translations: any = {'CARDS_TITLE': 'This is a test'};


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
      providers: [
        {
          provide: FormioAppConfig, useValue: {
            appUrl: 'http://localhost:4200',
            apiUrl: 'http://localhost:4200',
            formOnly: false
          }
        }
      ]
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
