import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent {
  cityInfos: any[] = [];

  constructor(private weatherService: WeatherService, private favoriteService: FavoriteService) { }

  onSearch(cityInfo: string) {
    const [cityName, stateCode, countryCode] = cityInfo.split(',');
    this.weatherService.getWeatherByCityName(cityName.trim(), stateCode.trim(), countryCode.trim()).subscribe(
      (data: any) => {
        this.cityInfos.push({
          cityName: cityName.trim(),
          weatherData: data.list[0]
        });

      },
      (error) => {
        console.error(error);
      }
    );
  }

  addToFavorites(cityInfo: any) {
    this.favoriteService.addToFavorites(cityInfo);
  }


  getWeatherIconUrl(iconCode: string): string {
    return 'https://openweathermap.org/img/wn/${iconCode}@2x.png';
  }

}
