import {Component, OnInit, ViewChild} from '@angular/core';
import {FormioComponent} from 'angular-formio';
import {FormioHelper} from '../../../../app/shared/utils/formio-helper';

@Component({
  selector: 'xcs-entity-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class EntityCreateComponent implements OnInit {

  @ViewChild('entityForm') entityForm: FormioComponent;

  ngOnInit() {
  }


  saveEntity(submission: any) {
    console.log(FormioHelper.extractOnlyPayload(submission));
  }

}
