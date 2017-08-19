import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EatstreetApiService{
    constructor(private http: Http){}
    /*
    apiHost = "api.eatstreet.com";
    apiVersion = "/publicapi/v1/";


    restaurant_search: "restaurant/search"
    restaurant_search_test :"restaurant/search-test"
    restaurant_details: "restaurant/{apiKey}" // pass a restaurant key from search results
    restaurant_menu: "restaurant/{apiKey}/menu"
    customizations: "customizations/{apiKey}"
    order_send: "send-order"
    order_get: "order/{apiKey}"
    order_status: "order/{apiKey}/status"
    user_register: "register-user"
    user_update: "update-user/{apiKey}"
    user_get: "user/{apiKey}"
    user_sign_in: "signin"
    user_order_history: "user/{apiKey}/orders"
    user_add_address: "user/{apiKey}/add-address"
    user_add_card: "user/{apiKey}/add-card"
    user_remove_card: "user/{apiKey}/remove-card/{cardApiKey}"
    user_remove_address: "user/{apiKey}/remove-address/{addressApiKey}"
    */

    searchRestaurants(address: string, foodItem: string){
        return this.http.get('https://api.eatstreet.com/publicapi/v1/restaurant/search?access-token=d5b2b39c7965b1ca&street-address=' + address + '&search=' + foodItem )
            .map((res: Response) => res.json());
    }


}


