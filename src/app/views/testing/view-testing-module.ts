import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormioModule} from 'angular-formio';
import {TranslateFakeLoader, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../shared';
import {EntityService, FormService} from '../services';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormioHelper} from '../../shared/utils';

const COMPONENTS = [];

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    RouterTestingModule,
    HttpClientTestingModule,
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useClass: TranslateFakeLoader}
    }),
    SharedModule,
    NgbModule.forRoot()
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [EntityService, FormService, FormioHelper.localTypeFormioConfigProvider()]
})
export class ViewsTestingModule {
}
