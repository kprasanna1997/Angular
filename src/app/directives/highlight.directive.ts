import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[highLight]'
})

export class HighlightDirective {

    constructor(private ele: ElementRef<any>) {
        this.ele.nativeElement.style.color = "red";
        this.ele.nativeElement.style.backgroundColor = "yellow";
    }
};