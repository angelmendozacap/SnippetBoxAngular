import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnippetsRoutingModule } from './snippets-routing.module';
import { SnippetsComponent } from './snippets.component';
import { SnippetListComponent } from './snippet-list/snippet-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SnippetsComponent, SnippetListComponent],
  imports: [
    CommonModule,
    SnippetsRoutingModule,
    HttpClientModule
  ]
})
export class SnippetsModule { }
