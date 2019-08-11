import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { DebugComponent } from './debug.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'debug', component: DebugComponent, data: { title: extract('Debug') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DebugRoutingModule {}
