import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateViewComponent} from '../../../../app/views/create-view/create-view.component';
import {FormioHelper} from '../../../../app/shared/utils';

@Component({
  selector: 'xcs-entity-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class EntityCreateComponent implements OnInit {

  @ViewChild('createView') createView: CreateViewComponent;

  constructor() {
  }

  ngOnInit() {
    this.createView.createEntityForm.submit.subscribe(submission => {
      console.log(FormioHelper.extractOnlyPayload(submission));
    });
  }


}
