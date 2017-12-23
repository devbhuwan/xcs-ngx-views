import {Component, Input, OnInit} from '@angular/core';
import {LocalStorageResolver} from '../../shared/utils';
import {MenuItem} from '../../shared/models';

@Component({
  selector: 'xcs-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.scss']
})
export class CreateViewComponent implements OnInit {

  @Input() productKey: string;
  activeMenuItem: MenuItem;

  constructor() {
  }

  ngOnInit() {
    this.activeMenuItem = LocalStorageResolver.resolveMenuItem(this.productKey);
  }
}
