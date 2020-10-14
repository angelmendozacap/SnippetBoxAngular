import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnippetsRoutingModule } from './snippets-routing.module';
import { SnippetsComponent } from './snippets.component';
import { SnippetListComponent } from './snippet-list/snippet-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SnippetCreateComponent } from './snippet-create/snippet-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SnippetsComponent, SnippetListComponent, SnippetCreateComponent],
  imports: [
    CommonModule,
    SnippetsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SnippetsModule { }
