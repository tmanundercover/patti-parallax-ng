import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeColumnLayoutComponent } from './three-column-layout/three-column-layout.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [ThreeColumnLayoutComponent, SectionComponent],
  exports: [ThreeColumnLayoutComponent, SectionComponent],
  imports: [CommonModule]
})
export class LayoutsModule {}
