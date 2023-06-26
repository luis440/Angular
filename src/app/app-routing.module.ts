import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginasRoutingModule } from './paginas/paginas-routing.module';

const routes: Routes = [
{path:'',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PaginasRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
