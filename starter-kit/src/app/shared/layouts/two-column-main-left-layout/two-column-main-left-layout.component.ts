import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-two-column-main-left-layout',
  templateUrl: './two-column-main-left-layout.component.html',
  styleUrls: ['./two-column-main-left-layout.component.scss']
})
export class TwoColumnMainLeftLayoutComponent implements OnInit {
  @Input()
  left: TemplateRef<any>;

  @Input()
  right: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
