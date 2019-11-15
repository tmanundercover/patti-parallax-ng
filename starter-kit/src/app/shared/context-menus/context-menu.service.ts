import { Injectable, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';
import { SectionComponent } from '../layouts/section/section.component';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {
  private _items: MenuItem[][] = [];
  public currentSectionTitle: string;

  public get currentItems(): MenuItem[] {
    return this._items[this.currentSectionTitle];
  }

  constructor() {}

  public setNewContextMenu(contextMenuTitle: string) {
    this.currentSectionTitle = contextMenuTitle;
  }
  public getMenuItems(title: string): MenuItem[] {
    if (this._items[title]) {
      return this._items[title];
    }
    return [];
  }

  public addContextMenuItems(incomingItems: MenuItem[], contextMenuTitle: string) {
    // let title = this.el.nativeElement.title;

    console.log('adding to context menu ', contextMenuTitle, incomingItems, this._items);
    if (!this._items[contextMenuTitle]) {
      this._items[contextMenuTitle] = [];
    }

    if (this._items[contextMenuTitle].length > 0) {
      this._items[contextMenuTitle].push({ separator: true });
    }

    incomingItems.forEach(i => {
      this._items[contextMenuTitle].push(i);
    });
  }

  setItems(menuItems: MenuItem[], contextMenuTitle: string) {
    this.addContextMenuItems(menuItems, contextMenuTitle);
  }
}

/** Any component that uses this interface will have a contextMenuItems member */
export interface MyContextMenuInterface {
  /**
   * the menuItems to be displayed in the context menu
   */
  contextMenuItems: MenuItem[];
}
