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

  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe((data:SongsResponse) => {
      this.songs = data.chart;
      this.filteredSongs = data.chart;
      console.log(this.songs);
    })
  }

  searchChanged() {
    if(!this.searchText){
      this.filteredSongs = this.songs;
    }
    else{

      this.filteredSongs = this.songs.filter(item => item.heading.title.includes(this.searchText));
      console.log(this.searchText);
    }
  }

}
