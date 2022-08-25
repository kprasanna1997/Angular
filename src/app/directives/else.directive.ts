import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[ngElse]'
})

export class ElseDirective {

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

    @Input() set ngElse(condition: boolean) {
        if (!condition) {
            this.viewContainer.createEmbeddedView(this.templateRef)
        } else {
            this.viewContainer.clear()
        }
    }

}