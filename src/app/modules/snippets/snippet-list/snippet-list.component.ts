import { Component, OnInit } from '@angular/core';
import { Snippet } from '../shared/models/snippet';
import { SnippetsService } from '../shared/services/snippets.service';

@Component({
  selector: 'box-snippet-list',
  templateUrl: './snippet-list.component.html',
  styleUrls: ['./snippet-list.component.scss']
})
export class SnippetListComponent implements OnInit {

  snippets: Snippet[]

  constructor(private service: SnippetsService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      console.table(response.data)
      this.snippets = response.data as Snippet[]
    })
  }

}
