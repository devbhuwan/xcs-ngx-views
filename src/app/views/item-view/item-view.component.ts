import {Component, Input, OnInit} from '@angular/core';
import {LocalStorageResolver} from '../../shared/utils';
import {Entity, MenuItem} from '../../shared/models';
import {EntityService} from '../services/entity.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'xcs-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  @Input() productKey: string;
  activeMenuItem: MenuItem;

  entity$: Observable<Entity> = Observable.of();

  constructor(private entityService: EntityService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeMenuItem = LocalStorageResolver.resolveMenuItem(this.productKey);
    this.route.params.subscribe(value => {
      this.entity$ = this.entityService.findOne(value['id']);
    });
  }
}
