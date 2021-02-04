import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@capacitor/core';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: [ 'tab1.page.scss' ]
})
export class Tab1Page implements OnInit {
    public weatherData: any = {};
    constructor(private weatherService: WeatherService,
        private platform: Platform) {}
    
    ngOnInit(): void {
        if (this.platform.is('hybrid')) {
            Geolocation.getCurrentPosition().then(this.loadWeatherData.bind(this)).catch((error) => {
                console.log('Error getting location', error);
            });
        } else {
            navigator.geolocation.getCurrentPosition(this.loadWeatherData.bind(this), () => console.log('Navigation Error occured!'));
        }
        
    }

    loadWeatherData(position) {
        const { latitude, longitude } = position.coords;
        this.weatherService.getCurrentWeather(latitude, longitude).subscribe(response => {
            console.log(response);
            this.weatherData = response;
        })
    }
}
