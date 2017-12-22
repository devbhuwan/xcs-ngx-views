import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateViewComponent} from './create-view/create-view.component';
import {EditViewComponent} from './edit-view/edit-view.component';
import {ListViewComponent} from './list-view/list-view.component';
import {ItemViewComponent} from './item-view/item-view.component';

const COMPONENTS = [
  CreateViewComponent,
  EditViewComponent,
  ListViewComponent,
  ItemViewComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: []
})
export class ViewsModule {
}
