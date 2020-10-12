import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Snippet } from '../models/snippet';

const SNIPPETS_API_URL = 'http://localhost:3030/api/snippets'

@Injectable({
  providedIn: 'root'
})
export class SnippetsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Snippet[]> {
    return this.httpClient.get<Snippet[]>(`${SNIPPETS_API_URL}`)
  }
}
