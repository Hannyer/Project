import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { UsuarioDetailsComponent } from './components/usuario-details/usuario-details.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';

import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioDetailsComponent } from './components/usuario-details/usuario-details.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';



const routes: Routes = [

  {path: '', redirectTo: 'usuario', pathMatch:'full'},
  {path: 'usuarios', component:UsuarioListComponent},
  {path: 'usuarios/:id', component:UsuarioDetailsComponent},
  {path: 'add', component:AddUsuarioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
