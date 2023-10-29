import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictVar } from './predict-var';
import { PredictVarService } from './predict-var.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }