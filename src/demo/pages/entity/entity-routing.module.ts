import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {EntityCreateComponent} from './create/create.component';
import {EntityListComponent} from './list/list.component';

const routes: Routes = [
  {
    path: 'create',
    component: EntityCreateComponent
  },
  {
    path: '',
    component: EntityListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntityRoutingModule {

}
