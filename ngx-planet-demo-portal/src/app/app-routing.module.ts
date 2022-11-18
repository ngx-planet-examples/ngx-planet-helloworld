import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyComponent } from '@worktile/planet';

const routes: Routes = [
    {
        path: 'highlightcard',
        component: EmptyComponent,
        children: [
            {
                path: '**',
                component: EmptyComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
