import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CURRENT_WEATHER } from '../constants/api-constants';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	constructor(private http: HttpClient) {}

	getCurrentWeather(latitude, longitude) {
        const url = `${API_CURRENT_WEATHER}?latitude=${latitude}&longitude=${longitude}`;
        return this.http.get(url).pipe(
            map(data => data),
            catchError((e: any) => {
                return throwError(e);
            })
        )
    }
}
