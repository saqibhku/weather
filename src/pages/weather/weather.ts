import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherServiceProvider } from '../../providers/weather-service/weather-service';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  theWeather: any = {};
  currentData: any = {};
  daily: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public weatherService: WeatherServiceProvider) {

    this.weatherService.getWeather().then(theResult => {
      this.theWeather = theResult;
      this.currentData = this.theWeather.currently;
      this.daily = this.theWeather.daily;
      console.log(this.currentData);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }

}
