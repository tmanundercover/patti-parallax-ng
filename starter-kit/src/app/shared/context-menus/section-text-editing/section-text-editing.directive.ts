import { Directive, ViewChild, ElementRef } from '@angular/core';
import { ContextMenuService } from '../context-menu.service';
import { ContextMenu } from 'primeng/contextmenu';
import { ContextMenuDirective } from '../context-menu.directive';
import { SectionComponent } from '@app/shared/layouts/section/section.component';

/**
 * Calls the parent class constructor and adds the unique context menu items.
 *
 * @param sectionImageContextMenuService - handle to the context menu service
 * @param el - this is the SectionComponent element that this directive is on.
 *             Use the title as a unique identifier for this section level context menu.
 */
@Directive({
  selector: '[appsectiontextediting]'
})
export class SectionTextEditingDirective extends ContextMenuDirective {
  /**
   * Calls the parent class constructor and adds the unique context menu items.
   *
   * @param sectionImageContextMenuService - handle to the context menu service
   * @param el - this is the SectionComponent element that this directive is on.
   *             Use the title as a unique identifier for this section level context menu.
   */
  constructor(
    private SectionTextEditingContextMenuService: ContextMenuService,
    private el: ElementRef<SectionComponent>
  ) {
    super(SectionTextEditingContextMenuService, el.nativeElement.title);

    this.contextMenuItems = [
      {
        label: 'textEditing1'
      },
      {
        label: 'textEditing2'
      }
    ];
  }
}
