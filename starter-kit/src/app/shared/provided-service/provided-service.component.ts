import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-provided-service',
  templateUrl: './provided-service.component.html',
  styleUrls: ['./provided-service.component.scss']
})
export class ProvidedServiceComponent implements OnInit {
  @Input() iconName: string;
  @Input() description: string;
  @Input() title: string;

  public isDisplayFront: boolean = true;
  public isDisplayBack: boolean = false;

  constructor() {}

  ngOnInit() {}

  displayBack() {
    this.isDisplayBack = true;
    this.isDisplayFront = false;
  }

  displayFront() {
    this.isDisplayBack = false;
    this.isDisplayFront = true;
  }
}
