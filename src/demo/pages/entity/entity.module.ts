import {NgModule} from '@angular/core';

import {EntityRoutingModule} from './entity-routing.module';
import {EntityCreateComponent} from './create/create.component';
import {EntityListComponent} from './list/list.component';
import {ViewsModule} from '../../../app';

const COMPONENTS = [EntityCreateComponent, EntityListComponent];

@NgModule({
  imports: [
    EntityRoutingModule,
    ViewsModule
  ],
  declarations: [
    ...COMPONENTS
  ],
})
export class EntityModule {
}
