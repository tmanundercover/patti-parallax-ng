import { Directive, ElementRef } from '@angular/core';
import { ContextMenuService } from '../context-menu.service';
import { ContextMenuDirective } from '../context-menu.directive';
import { SectionComponent } from '@app/shared/layouts/section/section.component';

/**
 * creates context menu items for any component with this directive
 */
@Directive({
  selector: '[appsectionimageediting]'
})
export class SectionImageEditingDirective extends ContextMenuDirective {
  /**
   * Calls the parent class constructor and adds the unique context menu items.
   *
   * @param sectionImageContextMenuService - handle to the context menu service
   * @param el - this is the SectionComponent element that this directive is on.
   *             Use the title as a unique identifier for this section level context menu.
   */
  constructor(private sectionImageContextMenuService: ContextMenuService, private el: ElementRef<SectionComponent>) {
    super(sectionImageContextMenuService, el.nativeElement.title);

    this.contextMenuItems = [
      {
        label: 'imageEditing1'
      },
      {
        label: 'imageEditing2'
      }
    ];
  }
}
