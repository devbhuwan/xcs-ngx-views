import {NgModule} from '@angular/core';

import {EntityRoutingModule} from './entity-routing.module';
import {EntityCreateComponent} from './create/create.component';
import {EntityListComponent} from './list/list.component';
import {ViewsModule} from '../../../app';
import {FormioModule} from 'angular-formio';
import {EntityViewComponent} from './view/view.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

const COMPONENTS = [EntityCreateComponent, EntityListComponent, EntityViewComponent];

@NgModule({
  imports: [
    EntityRoutingModule,
    FormioModule,
    ViewsModule,
    NgxDatatableModule
  ],
  declarations: [
    ...COMPONENTS
  ],
})
export class EntityModule {
}
