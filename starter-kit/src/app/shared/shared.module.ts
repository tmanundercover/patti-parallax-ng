import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ProvidedServiceComponent } from './provided-service/provided-service.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, ProvidedServiceComponent],
  exports: [LoaderComponent, ProvidedServiceComponent]
})
export class SharedModule {}
