import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;

  login(username: string, password:string) {
    this.authenticated =true;
  }

  logout() {
    this.authenticated = false;
  }

  isAuthenticated(): boolean {
    throw new Error('Method not implemented.');
  }
}
