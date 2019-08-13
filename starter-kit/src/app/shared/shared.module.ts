import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ProvidedServiceComponent } from './provided-service/provided-service.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, ProvidedServiceComponent, SectionComponent],
  exports: [LoaderComponent, ProvidedServiceComponent, SectionComponent]
})
export class SharedModule {}
