import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titled-text-box',
  templateUrl: './titled-text-box.component.html',
  styleUrls: ['./titled-text-box.component.scss']
})
export class TitledTextBoxComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;

  constructor() {}

  ngOnInit() {}
}
