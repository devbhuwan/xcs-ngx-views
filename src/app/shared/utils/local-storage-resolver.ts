import {MenuItem} from '../models';
import {STORAGE_KEY_FOR_MENU_ITEMS} from '../index';

export class LocalStorageResolver {

  static resolveMenuItem(productKey: string): MenuItem {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_FOR_MENU_ITEMS)).find((itemMenu: MenuItem) => {
      if (itemMenu.id === productKey) {
        return itemMenu;
      }
    });
  }
}
