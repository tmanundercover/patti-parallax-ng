import { Component, OnDestroy } from '@angular/core';
import { ContextMenuService } from '../context-menu.service';

/**
 * This component is the container for the context menu that will be hidden by
 * default but displayed on right click. This is for ALL context menus. If this
 * component is not present no context menus can be displayed.
 *
 * usage:
 *  <app-context-menu-container></app-context-menu-container>
 */
@Component({
  selector: 'app-context-menu-container',
  templateUrl: './context-menu-container.component.html'
})
export class ContextMenuContainerComponent {
  /** pass thru to the current items stored in the service */
  public get items() {
    return this.contextMenuService.currentItems;
  }

  checkExistence() {
    console.log('checkexistenc on container');
  }
  constructor(private contextMenuService: ContextMenuService) {}
}
