import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherApp';
  constructor(private authService: AuthService) {}

  isAuthenticated():boolean {
    return this.authService.isAuthenticated();
  }
}