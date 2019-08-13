import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DebugRoutingModule } from './debug-routing.module';
import { DebugComponent } from './debug.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [CommonModule, TranslateModule, DebugRoutingModule, SharedModule],
  declarations: [DebugComponent]
})
export class DebugModule {}
