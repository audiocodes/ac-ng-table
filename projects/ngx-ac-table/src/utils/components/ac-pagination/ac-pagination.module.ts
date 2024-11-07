import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AcPaginationComponent} from './ac-pagination.component';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PipesModule,
    ],
    declarations: [
        AcPaginationComponent,
    ],
    exports: [
        AcPaginationComponent,
    ]
})
export class AcPaginationModule {
}
