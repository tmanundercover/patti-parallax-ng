import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ProvidedServiceComponent } from './provided-service/provided-service.component';
import { SectionComponent } from './layouts/section/section.component';
import { QuoteComponent } from './quote/quote.component';
import { ThreeColumnLayoutComponent } from './layouts/three-column-layout/three-column-layout.component';
import { LayoutsModule } from './layouts/layouts.module';
import { TitledTextBoxComponent } from './titled-text-box/titled-text-box.component';
import { ContactBlockComponent } from './contact-block/contact-block.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  imports: [CommonModule, LayoutsModule],
  declarations: [
    LoaderComponent,
    ProvidedServiceComponent,
    QuoteComponent,
    TitledTextBoxComponent,
    ContactBlockComponent,
    ContactFormComponent
  ],
  exports: [
    LoaderComponent,
    ProvidedServiceComponent,
    SectionComponent,
    QuoteComponent,
    ThreeColumnLayoutComponent,
    TitledTextBoxComponent,
    ContactBlockComponent,
    ContactFormComponent
  ]
})
export class SharedModule {}
