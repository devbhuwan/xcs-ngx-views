import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'xcs-pages',
  template: `
    <xcs-layout></xcs-layout>
  `
})
export class PagesComponent implements OnInit {

  menu: any[] = [];

  constructor(private location: Location) {
  }

  ngOnInit() {
    this.menu = [{
      title: 'Entity Features',
      icon: 'nb-keypad',
      children: [
        {
          title: 'Create Entity',
          link: this.location.path() + '/create',
        },
        {
          title: 'List Entities',
          link: this.location.path()
        }
      ],
    }];
  }

}
