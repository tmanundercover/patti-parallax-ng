import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContextMenuService } from '@app/shared/context-menus/context-menu.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() title: string;
  @Input() isDisplayTitle: boolean = false;
  @Input() backgroundColor: string = 'white';
  @Input() backgroundImage: string = '';
  @Input() fontcolor?: string = '';

  private _id: string;
  constructor(private el: ElementRef<SectionComponent>, private contextMenuService: ContextMenuService) {}

  ngOnInit() {
    this._id = this.el.nativeElement.title;
  }
  getSectionId() {
    return this._id;
  }

  /**
   * Allows brower context menu to show in sections without context menus
   *
   * @param $event the contextMenu event
   */
  @HostListener('contextmenu', ['$event'])
  onContextMenu($event: MouseEvent) {
    /**
     * resets the context menu so that browser menu can show
     */
    this.contextMenuService.resetContextMenu();
  }
}
