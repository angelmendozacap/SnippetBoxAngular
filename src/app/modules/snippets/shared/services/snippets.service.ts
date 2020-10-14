import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseMessage } from 'src/app/shared/models/response-message';
import { Snippet } from '../models/snippet';

const SNIPPETS_API_URL = 'https://localhost:3030/api/snippets'

@Injectable({
  providedIn: 'root'
})
export class SnippetsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ResponseMessage> {
    return this.httpClient.get<ResponseMessage>(`${SNIPPETS_API_URL}`)
  }

  create(snippet: Snippet): Observable<ResponseMessage> {
    return this.httpClient.post<ResponseMessage>(`${SNIPPETS_API_URL}`, snippet)
  }
}
