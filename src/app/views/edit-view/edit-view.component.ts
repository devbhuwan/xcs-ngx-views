import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormioComponent} from 'angular-formio';
import {Entity} from '../../shared/models';
import {Observable} from 'rxjs/Observable';
import {FormioRefreshType} from '../../shared/utils/formio-helper';

@Component({
  selector: 'xcs-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {

  @ViewChild('editForm') editForm: FormioComponent;
  @Input() entity: Observable<Entity>;

  constructor() {
  }

  ngOnInit() {
    this.entity.subscribe(_entity => {
      // this.editForm.submission.data = _entity;
      // this.editForm.onRefresh({
      //   property: FormioRefreshType.SUBMISSION, value: this.editForm.submission
      // });

    });
  }

}
