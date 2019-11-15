import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
  constructor(private el: ElementRef<SectionComponent>) {}

  ngOnInit() {
    this._id = this.el.nativeElement.title;
  }
  getSectionId() {
    return this._id;
  }
}
