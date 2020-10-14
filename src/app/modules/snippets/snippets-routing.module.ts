import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnippetCreateComponent } from './snippet-create/snippet-create.component';
import { SnippetListComponent } from './snippet-list/snippet-list.component';
import { SnippetsComponent } from './snippets.component';

const routes: Routes = [
  {
    path: '',
    component: SnippetsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SnippetListComponent
      },
      {
        path: 'create',
        component: SnippetCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnippetsRoutingModule { }
