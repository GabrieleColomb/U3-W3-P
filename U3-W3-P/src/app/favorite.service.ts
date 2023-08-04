import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteCities: any[] = [];
  private favoritesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  favoriteService: any;

  addToFavorites(cityInfo: any) {
    this.favoriteCities.push(cityInfo);
  }



  getFavorites() {
    return this.favoritesSubject.asObservable();
  }
}
