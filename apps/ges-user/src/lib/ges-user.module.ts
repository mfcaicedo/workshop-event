import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gesUserRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(gesUserRoutes)],
})
export class GesUserModule {}
