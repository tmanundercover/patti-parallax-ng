import { Injectable, EventEmitter, HostListener, ElementRef, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';
import { SectionComponent } from '../layouts/section/section.component';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {
  private _allContextMenus: MenuItem[][] = [];
  public currentSectionTitle: string = undefined;

  public get currentItems(): MenuItem[] {
    return this._allContextMenus[this.currentSectionTitle];
  }

  constructor() {}

  public setNewContextMenu(contextMenuTitle: string) {
    this.currentSectionTitle = contextMenuTitle;
  }

  public getMenuItems(title: string): MenuItem[] {
    if (this._allContextMenus[title]) {
      return this._allContextMenus[title];
    }
    return [];
  }

  /**
   * Resets the Context Menu Module
   */
  public resetContextMenu() {
    console.log('resetting module');
    this.currentSectionTitle = undefined;
  }

  public addContextMenuItems(incomingItems: MenuItem[], contextMenuTitle: string) {
    // let title = this.el.nativeElement.title;

    console.log('adding to context menu ', contextMenuTitle, incomingItems, this._allContextMenus);
    if (!this._allContextMenus[contextMenuTitle]) {
      this._allContextMenus[contextMenuTitle] = [];
    }

    if (this._allContextMenus[contextMenuTitle].length > 0) {
      this._allContextMenus[contextMenuTitle].push({ separator: true });
    }

    incomingItems.forEach(i => {
      this._allContextMenus[contextMenuTitle].push(i);
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
