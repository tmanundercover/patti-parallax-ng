import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-provided-service',
  templateUrl: './provided-service.component.html',
  styleUrls: ['./provided-service.component.scss']
})
export class ProvidedServiceComponent implements OnInit {
  @Input() image: string;
  @Input() name: string;
  @Input() title: string;
  @Input() bio: string;

  constructor() {}

  ngOnInit() {}
}
