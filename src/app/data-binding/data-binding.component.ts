import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
  @ViewChild("inputElement") elementRefenrence:ElementRef

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

  getInputValue(element:any){
   console.log(element.value);
   console.log(this.elementRefenrence.nativeElement.value)
   
  }

}
