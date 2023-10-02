import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gesUsersRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(gesUsersRoutes)],
})
export class GesUsersModule {}
