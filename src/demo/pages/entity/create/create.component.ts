import {Component, OnInit, ViewChild} from '@angular/core';
import {FormioComponent} from 'angular-formio';
import {FormioHelper} from '../../../../app/shared/utils/formio-helper';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'xcs-entity-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class EntityCreateComponent implements OnInit {

  @ViewChild('entityForm') entityForm: FormioComponent;
  entityFormJson: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(`/assets/forms/entryForm.json`)
      .subscribe(value => this.entityFormJson = value);
  }


  saveEntity(submission: any) {
    console.log(FormioHelper.extractOnlyPayload(submission));
  }

}
