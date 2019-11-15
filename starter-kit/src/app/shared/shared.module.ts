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
import { TwoColumnMainLeftLayoutComponent } from './layouts/two-column-main-left-layout/two-column-main-left-layout.component';
import { SectionTextEditingDirective } from './context-menus/section-text-editing/section-text-editing.directive';
import { ContextMenuContainerComponent } from './context-menus/context-menu-container/context-menu-container.component';
import { ContextMenuModule } from 'primeng/contextmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuService } from './context-menus/context-menu.service';
import { ContextMenuDirective } from './context-menus/context-menu.directive';
import { SectionImageEditingDirective } from './context-menus/section-image-editing/section-image-editing.directive';

@NgModule({
  imports: [CommonModule, LayoutsModule, ContextMenuModule, BrowserAnimationsModule],
  declarations: [
    LoaderComponent,
    ProvidedServiceComponent,
    QuoteComponent,
    TitledTextBoxComponent,
    ContactBlockComponent,
    ContactFormComponent,
    SectionTextEditingDirective,
    ContextMenuContainerComponent,
    ContextMenuDirective,
    SectionImageEditingDirective
  ],
  exports: [
    LoaderComponent,
    ProvidedServiceComponent,
    SectionComponent,
    QuoteComponent,
    ThreeColumnLayoutComponent,
    TwoColumnMainLeftLayoutComponent,
    TitledTextBoxComponent,
    ContactBlockComponent,
    ContactFormComponent,
    ContextMenuContainerComponent,
    SectionTextEditingDirective,
    ContextMenuDirective,
    SectionImageEditingDirective
  ],
  providers: [ContextMenuService],
  entryComponents: [ContextMenuContainerComponent]
})
export class SharedModule {}
