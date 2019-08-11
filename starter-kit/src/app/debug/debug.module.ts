import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DebugRoutingModule } from './debug-routing.module';
import { DebugComponent } from './debug.component';

@NgModule({
  imports: [CommonModule, TranslateModule, DebugRoutingModule],
  declarations: [DebugComponent]
})
export class DebugModule {}
