import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practices';
  evenNumbers:number[]=[]
  oddNumbers:number[]=[]

  getNumber(numberSent:number){
    console.log(numberSent);
    
    if(numberSent%2===0){
      this.evenNumbers.push(numberSent)
    }else{
      this.oddNumbers.push(numberSent)
    }
  }
}
