import {Component, Input, OnInit} from '@angular/core';
import {Entity, MenuItem} from '../../shared/models';
import {LocalStorageResolver} from '../../shared/utils';
import {EntityService} from '../services';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'xcs-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  @Input() productKey: string;
  activeMenuItem: MenuItem;
  entities$: Observable<Entity[]> = Observable.of();
  @Input() columns: string[];
  @Input() mainColumn = 'id';

  constructor(private entityService: EntityService) {
  }

  ngOnInit() {
    this.activeMenuItem = LocalStorageResolver.resolveMenuItem(this.productKey);
    this.entities$ = this.entityService.findAll({key: ''});
  }

}
