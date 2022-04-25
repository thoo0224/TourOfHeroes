import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>("https://localhost:7082/api/heroes");
  }

  getHero(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(`https://localhost:7082/api/hero/${id}`);
  }
  
}
