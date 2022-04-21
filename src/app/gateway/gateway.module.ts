import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import {GatewayListComponent} from './gateway-list/gateway-list.component';

@NgModule({
  declarations: [
    GatewayListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GatewayListComponent
  ]
})
export class GatewayModule {
}
