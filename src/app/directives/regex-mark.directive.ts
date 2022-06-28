import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
    selector: '[appRegexMark]'
})
export class RegexMarkDirective implements OnChanges, OnInit {

    @Input()
    public appRegexMark = new RegExp('');

    @Input()
    public appValue = '';

    constructor(private element: ElementRef) {
    }

    ngOnInit(): void {
        this.ngOnChanges();
    }

    ngOnChanges(): void {
        const matchRegexp = this.appRegexMark.exec(this.appValue);
        matchRegexp?.forEach(match => this.element.nativeElement.innerHTML = this.appValue.replace(match, `<mark>${match}</mark>`));
    }

}
