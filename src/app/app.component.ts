import { Component } from '@angular/core';

import { EatstreetApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: EatstreetApiService){}
  lat = 38.76175;
  lng = -88.26539;
  data: any;
  restaurants: any[]
  temp = [{name:''}]

  onSearchRestaurants(address: string, foodItem: string){
    this.apiService.searchRestaurants(address, foodItem)
      .subscribe(
        (data) => {
          this.data = data;
          if(data.restaurants.length === 0){
            this.temp[0].name = "This food item is not covered by eatstreet, Please choose another item";
            this.restaurants = this.temp;
          }
          else{
            this.restaurants = data.restaurants;
            this.lat = this.restaurants[0].latitude;
            this.lng = this.restaurants[0].longitude;
            console.log(this.lat);
            console.log(this.lng);
          }
        }
      )
  }
}
