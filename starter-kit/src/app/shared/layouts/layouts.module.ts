import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeColumnLayoutComponent } from './three-column-layout/three-column-layout.component';
import { SectionComponent } from './section/section.component';
import { TwoColumnMainLeftLayoutComponent } from './two-column-main-left-layout/two-column-main-left-layout.component';

@NgModule({
  declarations: [ThreeColumnLayoutComponent, TwoColumnMainLeftLayoutComponent, SectionComponent],
  exports: [ThreeColumnLayoutComponent, TwoColumnMainLeftLayoutComponent, SectionComponent],
  imports: [CommonModule]
})
export class LayoutsModule {}
