import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
        
      {
        path: 'clientes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../clientes/clientes.module').then(m => m.ClientesPageModule)
          }
        ]
      },
      {
        path: 'gerenciamento',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../gerenciamento/gerenciamento.module').then(m => m.GerenciamentoPageModule)
          }
        ]
      },
      {
        path: 'estatistica',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../estatistica/estatistica.module').then(m => m.EstatisticaPageModule)
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
