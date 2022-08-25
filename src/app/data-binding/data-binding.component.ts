import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  welcome: string = "Welcome to Data-binding session";
  isTrue: boolean = false;
  position: string = "center"
  name: string = "Google";
  isCreated: string = "";

  constructor() {
    setTimeout(() => {
      this.isTrue = true;
    }, 10000)
  }

  ngOnInit(): void {
  }

  serverName(event:Event) {
    this.name = (event.target as HTMLInputElement).value
  }

  createServer() {
    this.isCreated = `Server is created with server name ${this.name}`
  }

}
