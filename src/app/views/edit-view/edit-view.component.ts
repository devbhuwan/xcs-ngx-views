import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormioComponent} from 'angular-formio';
import {Entity, MenuItem} from '../../shared/models';
import {Observable} from 'rxjs/Observable';
import {FormioRefreshType, LocalStorageResolver} from '../../shared/utils';
import {FormService} from '../services';

@Component({
  selector: 'xcs-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {

  @Input() productKey: string;
  @Input() entity: Observable<Entity>;
  @ViewChild('editEntityForm') editEntityForm: FormioComponent;
  activeMenuItem: MenuItem;
  editFormJson: any;

  constructor(private formService: FormService) {
  }

  ngOnInit() {
    this.activeMenuItem = LocalStorageResolver.resolveMenuItem(this.productKey);
    this.entity.subscribe(_entity => {
      this.formService.loadForm('entityForm.json').subscribe(value => {
        this.editFormJson = value;
        this.editEntityForm.submission.data = _entity;
      });
    });
  }

  refreshPage() {
    this.editEntityForm.onRefresh({property: FormioRefreshType.SUBMISSION, value: this.editEntityForm.submission});
  }
}
