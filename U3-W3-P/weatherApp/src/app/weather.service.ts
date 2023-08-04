import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  private apiKey = '127f77ccb57437c5fc0d8cc97f32fe8a';

  constructor(private http: HttpClient) { }

  getWeatherForecasts(): Observable<any> {
    const lat = 'YOUR_LATITUDE';
    const lon = 'YOUR_LONGITUDE';
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get(url);
  }

  getWeatherByCityName(cityName: string, stateCode: string, countryCode: string) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName},${stateCode},${countryCode}&appid=${this.apiKey}`;
    return this.http.get(url);
  }

  getCoordinates(cityName: string) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${this.apiKey}`;
    return this.http.get<any[]>(url);
  }
}
