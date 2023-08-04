import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

    getFavorites(): Observable<any> {
      return this.http.get(`${this.apiUrl}/favorites`);
    }
  }
