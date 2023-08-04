import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { WeatherService } from '../weather.service';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoriteCities: any[] = [];

  constructor(
    private favoriteService: FavoriteService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.favoriteService.getFavorites().subscribe((cities: string[]) => {
      const observables: Observable<any>[] = cities.map((city: string) => {
        return this.weatherService.getWeatherByCityName(city, '', '').pipe(
          map((weatherData: any) => ({
            cityName: city,
            weatherData: weatherData.list[0]
          }))
        );
      });

      forkJoin(observables).subscribe(
        (cityInfosArray: any[]) => {
          this.favoriteCities = cityInfosArray;
        },
        (error: any) => {
          console.error(error);
        }
      );
    });
  }
}
