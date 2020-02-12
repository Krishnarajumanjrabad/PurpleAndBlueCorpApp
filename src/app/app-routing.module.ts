
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      enableTracing: false,
      useHash: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
