import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { CreateUpdateFormComponent } from './shared/forms/create-update-form/create-update-form.component';

const routes: Routes = [
  { path: '', component: DashboardPageComponent },
  { path: 'add', component: CreateUpdateFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
