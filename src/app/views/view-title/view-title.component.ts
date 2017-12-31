import {Component, Input, OnInit} from '@angular/core';
import {Title} from '../../shared/models';

@Component({
  selector: 'xcs-view-title',
  templateUrl: './view-title.component.html',
  styleUrls: ['./view-title.component.scss']
})
export class ViewTitleComponent implements OnInit {
  @Input() title: Title;
  @Input() productKey: string;

  constructor() {
  }

  ngOnInit() {
  }

}
