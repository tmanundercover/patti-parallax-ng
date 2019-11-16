import { Directive, HostListener } from '@angular/core';
import { ContextMenuService, MyContextMenuInterface } from './context-menu.service';
import { MenuItem } from 'primeng/api';

/**
 * Base class for any context menu. This is so that every context menu will
 * use the same service.Uses the context menu service to store it's data for
 * dynamic context menus based on multiple directives. This directive should
 * not be used alone.
 */
@Directive({
  selector: '[contextmenu]'
})
export class ContextMenuDirective implements MyContextMenuInterface {
  /**
   * returns the currently active context menu items service
   */
  public get contextMenuItems(): MenuItem[] {
    return this.contextMenuService.getMenuItems(this.contextMenuTitle);
  }

  /**
   * adds the menu items to the context menu for this context menu
   */
  public set contextMenuItems(menuItems: MenuItem[]) {
    console.log('menu items set', menuItems);
    this.contextMenuService.setItems(menuItems, this.contextMenuTitle);
  }

  /**
   *
   * @param contextMenuService the global context menu service
   * @param contextMenuTitle the unique ID of the context menu to add
   *                         these items to
   */
  constructor(private contextMenuService: ContextMenuService, public contextMenuTitle: string) {
    console.log('directive on ', this.contextMenuTitle, this.contextMenuItems);
  }

  /**
   * changes the context menu that is currently being viewed when the user clicks
   *
   * @param $event the contextMenu event
   */
  @HostListener('contextmenu', ['$event'])
  onContextMenu($event: MouseEvent) {
    $event.preventDefault();

    console.log('clicked section', this.contextMenuTitle, this);
    /**
     * indicates which item was selected
     */
    this.contextMenuService.setNewContextMenu(this.contextMenuTitle);
  }
}
