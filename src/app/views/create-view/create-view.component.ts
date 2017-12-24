import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormioHelper, LocalStorageResolver} from '../../shared/utils';
import {MenuItem} from '../../shared/models';
import {FormService} from '../services';
import {FormioComponent} from 'angular-formio';

@Component({
  selector: 'xcs-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.scss']
})
export class CreateViewComponent implements OnInit {

  @Input() productKey: string;
  activeMenuItem: MenuItem;
  createFormJson: any;

  constructor(private formService: FormService) {
  }

  @ViewChild('createEntityForm') private _createEntityForm: FormioComponent;

  get createEntityForm(): FormioComponent {
    return this._createEntityForm;
  }

  ngOnInit() {
    this.activeMenuItem = LocalStorageResolver.resolveMenuItem(this.productKey);
    this.formService.loadForm('entityForm.json').subscribe(value => {
      this.createFormJson = value;
    });
  }

  saveEntity(submission: any) {
    console.log(FormioHelper.extractOnlyPayload(submission));
  }
}
