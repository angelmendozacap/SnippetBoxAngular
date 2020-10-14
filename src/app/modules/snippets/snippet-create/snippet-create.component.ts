import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnippetsService } from '../shared/services/snippets.service';

@Component({
  selector: 'box-snippet-create',
  templateUrl: './snippet-create.component.html',
  styleUrls: ['./snippet-create.component.scss']
})
export class SnippetCreateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(10)]),
    content: new FormControl('', [Validators.required, Validators.minLength(20)]),
    expires_at: new FormControl('', [Validators.required, Validators.pattern(/365|7|1/)]),
    user_id: new FormControl(1, [Validators.required])
  })

  constructor(private service: SnippetsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(e: Event) {
    e.preventDefault()

    if (this.form.valid) {
      this.service.create(this.form.value)
        .subscribe(res => {
          this.router.navigate([''])
        })
    } else {
      console.error('Form is invalid')
    }
  }

}
