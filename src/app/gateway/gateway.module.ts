import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

import {GatewayListComponent} from './gateway-list/gateway-list.component';

const routes: Routes = [
  {path: '', component: GatewayListComponent}
];

@NgModule({
  declarations: [
    GatewayListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    GatewayListComponent
  ]
})
export class GatewayModule {
}
