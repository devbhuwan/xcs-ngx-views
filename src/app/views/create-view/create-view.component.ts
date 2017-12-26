import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {LocalStorageResolver} from '../../shared/utils';
import {MenuItem} from '../../shared/models';
import {FormioComponent} from 'angular-formio';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'xcs-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.scss']
})
export class CreateViewComponent implements OnInit {

  @Input() productKey: string;
  activeMenuItem: MenuItem;
  createFormJson: any;
  @Input() form: Observable<any>;

  constructor() {
  }

  @ViewChild('createEntityForm') private _createEntityForm: FormioComponent;

  get createEntityForm(): FormioComponent {
    return this._createEntityForm;
  }

  ngOnInit() {
    this.activeMenuItem = LocalStorageResolver.resolveMenuItem(this.productKey);
    this.form.subscribe(value => this.createFormJson = value);
  }

}
