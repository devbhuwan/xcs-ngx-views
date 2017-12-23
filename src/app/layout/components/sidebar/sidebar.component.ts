import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';
import {Observable} from 'rxjs/Observable';
import {MenuItem} from '../../../shared/models';
import {STORAGE_KEY_FOR_MENU_ITEMS} from '../../../shared';

@Component({
  selector: 'xcs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isActive = false;
  showMenu = '';
  menuItems$: Observable<MenuItem[]> = Observable.of();

  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit() {
    this.menuItems$ = this.sidebarService.findAllMenuItems();
    this.menuItems$.subscribe(value => {
      localStorage.setItem(STORAGE_KEY_FOR_MENU_ITEMS, JSON.stringify(value));
    });
  }


  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
}
