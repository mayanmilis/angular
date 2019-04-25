import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  @Input() title: String;
  @Input() subtitle: String;
  @Input() index: Number;
  @Input() img: String;
  shazamIcon: String='http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c538.png';
  @Input() url: String;
  constructor() { }

  ngOnInit() {
  }

}
