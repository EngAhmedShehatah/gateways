import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

import {GatewayListComponent} from './gateway-list/gateway-list.component';
import {GatewayEditComponent} from './gateway-edit/gateway-edit.component';

const routes: Routes = [
  {path: '', component: GatewayListComponent},
  {path: 'add', component: GatewayEditComponent},
  {path: 'edit/:id', component: GatewayEditComponent}
];

@NgModule({
  declarations: [
    GatewayListComponent,
    GatewayEditComponent
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
