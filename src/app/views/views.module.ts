import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateViewComponent} from './create-view/create-view.component';
import {EditViewComponent} from './edit-view/edit-view.component';
import {ListViewComponent} from './list-view/list-view.component';
import {ItemViewComponent} from './item-view/item-view.component';
import {FormioModule} from 'angular-formio';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared';
import {TranslateModule} from '@ngx-translate/core';
import {EntityService} from './services/entity.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const COMPONENTS = [
  CreateViewComponent,
  EditViewComponent,
  ListViewComponent,
  ItemViewComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    RouterModule,
    TranslateModule,
    SharedModule,
    NgbModule.forRoot()
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [EntityService]
})
export class ViewsModule {
}
