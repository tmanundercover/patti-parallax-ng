import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() title: string;
  @Input() backgroundColor: string = 'white';
  @Input() backgroundImage: string = '';
  @Input() fontcolor?: string = '';

  constructor() {}

  ngOnInit() {}
}
