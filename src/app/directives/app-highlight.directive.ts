import { Directive ,ElementRef, Renderer2, HostListener, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective implements OnInit {

  constructor(private element:ElementRef , private renderer:Renderer2) { }

  ngOnInit(): void {
    this.color="green";
  }


  @HostBinding('style.backgroundColor') color:string;
  

  @HostListener("mouseenter") onMouseOver(){
    // this.renderer.setStyle(this.element.nativeElement,'background-color','green') OR
    this.color="grey";
  }
  @HostListener("mouseleave") onMouseOut(){
    // this.renderer.setStyle(this.element.nativeElement,'background-color','grey') OR
    this.color="green";
  }

}
