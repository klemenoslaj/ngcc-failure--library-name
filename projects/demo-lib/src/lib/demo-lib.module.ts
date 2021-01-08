import { NgModule } from '@angular/core';
import { DemoLibShellModule } from 'demo-lib-shell';

import { DemoLibComponent } from './demo-lib.component';

@NgModule({
  declarations: [DemoLibComponent],
  imports: [DemoLibShellModule],
  exports: [DemoLibComponent]
})
export class DemoLibModule { }
