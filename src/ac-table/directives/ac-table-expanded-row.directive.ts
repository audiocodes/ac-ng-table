import {Directive, TemplateRef} from '@angular/core';

@Directive({
    selector: '[acTableExpandedRow]',
})
export class AcTableExpandedRowDirective {

    constructor(public template: TemplateRef<any>,) {
    }
}
