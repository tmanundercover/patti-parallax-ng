import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-three-column-layout',
  templateUrl: './three-column-layout.component.html',
  styleUrls: ['./three-column-layout.component.scss']
})
export class ThreeColumnLayoutComponent implements OnInit {
  @Input()
  left: TemplateRef<any>;

  @Input()
  center: TemplateRef<any>;

  @Input()
  right: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
