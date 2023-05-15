import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { CreateEditEmpleadoComponent } from './components/create-edit-empleado/create-edit-empleado.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-empleados', pathMatch: 'full' },
  {
    path: 'list-empleados',
    component: ListEmpleadosComponent,
  },
  {
    path: 'create-empleado',
    component: CreateEditEmpleadoComponent,
  },
  { path: 'edit-empleado/:id', component: CreateEditEmpleadoComponent },
  { path: '**', redirectTo: 'list-empleados', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
