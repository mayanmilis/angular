import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { SongsResponse, Song } from '../models';



@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  appTitle: string = 'Top 200 Song List';
  songs: Song[];
  filteredSongs: Song[];
  searchText: string;
  loader: string;
  favorites: object;


  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getFavorites().subscribe(data =>  {
      this.favorites = data;
      console.log(data, 'yona');
    });
    
    this.data.getUsers().subscribe((data:SongsResponse) => {
      this.songs = data.chart;
      this.filteredSongs = data.chart;
      if(this.songs){
        this.loader = 'none';
      }

      console.log(this.songs);
    })
  }

  searchChanged() {
    if(!this.searchText){
      this.filteredSongs = this.songs;
    }
    else{

      this.filteredSongs = this.songs.filter(item => item.heading.title.toLocaleLowerCase().indexOf(this.searchText.toLocaleLowerCase())>-1);
      console.log(this.searchText);
    }
  }

}
