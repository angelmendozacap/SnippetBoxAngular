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
    /* this.service.getAll().subscribe(data => {
      console.log('data', data)
      this.snippets = data
    }) */

    this.snippets = [
      {
        id: 1,
        user_id: 1,
        title: 'One Title',
        content: '<h2>Content Title</h2><p>i dont\'t know what\'s going on</p>',
        expires_at: '2020-12-12',
        created_at: '2020-12-12',
      }
    ]
  }

}
