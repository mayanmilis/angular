import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../models';
import { DataService } from '../data.service';



@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  @Input() song: Song;
  @Input() title: String;
  @Input() subtitle: String;
  @Input() index: Number;
  @Input() img: String;
  shazamIcon: String='http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c538.png';
  @Input() url: String;
  favorites: Object;
  id: String;

  
  
  

  constructor(private data: DataService) { }

  ngOnInit() {
  }
  getFavorites()  {
    this.data.getFavorites().subscribe(data =>  {
      this.favorites = data;
      console.log(this.favorites);
    });
    let x = Object.keys(this.favorites);
    
    
    
  }
  addToFavorites()  {
    let value = {"name": this.title}
    this.data.addToFavorites(value).subscribe(data =>  {
      console.log(data)
    });
  }
  removeFromFavorites() {
    this.data.removeFromFavorites().subscribe(data => {
      console.log(data);
    })
  }
  
  
}
