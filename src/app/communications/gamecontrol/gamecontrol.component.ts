import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  interval: any;
  firedNumber: number = 0;
  @Output() fireNumber = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }


  start() {
    this.interval = setInterval(() => {
      this.firedNumber = this.firedNumber ;
      this.firedNumber++ 
      this.fireNumber.emit(this.firedNumber);
    }, 1000)
  }

  pause() {
    clearInterval(this.interval)
  }
}
