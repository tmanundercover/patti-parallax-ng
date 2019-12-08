import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class CategoryTabsComponent implements OnInit {
  @Input()
  educationTab: TemplateRef<any>;
  @Input()
  experienceTab: TemplateRef<any>;
  @Input()
  skillsTab: TemplateRef<any>;
  @Input()
  contactMeTab: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
