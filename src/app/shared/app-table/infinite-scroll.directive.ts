import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({selector: '[appInfiniteScroll]'})
export class InfiniteScrollDirective {

    @Output() reachedScrollLimit = new EventEmitter<any>();
    @Input() scrollBuffer = 20;

    constructor() {}

    @HostListener('scroll', ['$event'])
    onScroll(e: any) {
        const tableViewHeight = e.target.offsetHeight;
        const tableScrollHeight = e.target.scrollHeight;
        const scrollLocation = e.target.scrollTop;
        const limit = tableScrollHeight - tableViewHeight - this.scrollBuffer;
        console.log(scrollLocation, limit, tableScrollHeight, tableViewHeight, this.scrollBuffer)
        if (limit > 0 && scrollLocation > limit) {
            this.reachedScrollLimit.emit();
        }
    }

}
