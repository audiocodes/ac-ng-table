import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AcFuncPipe} from './func.pipe';
import {ByStringPipe} from './by-string.pipe';

const PIPES = [
    AcFuncPipe,
    ByStringPipe,
];


@NgModule({
    declarations: [...PIPES],
    imports: [
        CommonModule
    ],
    providers: [
        ...PIPES
    ],
    exports: PIPES
})
export class PipesModule {
}
