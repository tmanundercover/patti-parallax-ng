import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DebugRoutingModule } from './debug-routing.module';
import { DebugComponent } from './debug.component';
import { SharedModule } from '@app/shared';
import { ProgressBarModule } from 'primeng/progressbar';
import { ContextMenuModule } from 'primeng/contextmenu';

@NgModule({
  imports: [CommonModule, TranslateModule, DebugRoutingModule, SharedModule, ProgressBarModule, ContextMenuModule],
  declarations: [DebugComponent]
})
export class DebugModule {}
