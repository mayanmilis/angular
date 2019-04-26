import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick()  {
    return console.log('Clicked!');
  }
  getUsers(){
    return this.http.get('https://fullstack-test-server.herokuapp.com/api/songs')
  }
  getAllFavorites(){
    return this.http.get('https://fullstack-test-server.herokuapp.com/api/getAllFavorites')
  }
}
