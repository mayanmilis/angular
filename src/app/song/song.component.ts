import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  @Input() name: String;
  @Input() email: String;
  @Input() index: Number;
  constructor() { }

  ngOnInit() {
  }

}
