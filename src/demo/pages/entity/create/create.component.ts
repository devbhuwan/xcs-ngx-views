import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateViewComponent} from '../../../../app/views/create-view/create-view.component';
import {FormioHelper} from '../../../../app/shared/utils';
import {FormService} from '../../../../app/views/services';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'xcs-entity-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class EntityCreateComponent implements OnInit {

  @ViewChild('createView') createView: CreateViewComponent;
  form$: Observable<any>;

  constructor(private formService: FormService) {
  }

  ngOnInit() {
    this.form$ = this.formService.loadForm(`entryForm.json`);
    this.createView.createEntityForm.submit.subscribe(submission => {
      console.log(FormioHelper.extractOnlyPayload(submission));
    });
  }


}
