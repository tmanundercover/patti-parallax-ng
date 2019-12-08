import { Component, OnInit, Input } from '@angular/core';
import { ExperienceInterface } from './experience.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() experience: ExperienceInterface;
  @Input() isDetailBullets: Boolean = false;

  constructor() {}

  ngOnInit() {
    if (Array.isArray(this.experience.dutiesDescription)) {
      this.isDetailBullets = true;
    }
  }
}
