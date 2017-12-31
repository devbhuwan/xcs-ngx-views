import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractViewComponent} from '../abstract-view-component';
import {FormService} from '../services';
import {Entity} from "../../shared/models";

@Component({
  selector: 'xcs-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.scss']
})
export class CreateViewComponent extends AbstractViewComponent implements OnInit {

  createFormJson: any;
  @Input() formSrc: string;
  @Output() submitted: EventEmitter<Entity> = new EventEmitter<Entity>();

  constructor(private formService: FormService) {
    super();
  }

  ngOnInit() {
    if (this.formSrc) {
      this.formService.loadForm(this.formSrc).subscribe(value => this.createFormJson = value);
    }
  }

  updateSelectComponent(name: string, values: any) {
  }

  createFormSubmit(payload: Entity) {
    this.submitted.emit(payload);
  }

}
