import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  appTitle: string = 'Top 200 Song List';
  songs: Object;

  constructor(private data: DataService ) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.songs = data;
      console.log(this.songs);
    })
  }

}
