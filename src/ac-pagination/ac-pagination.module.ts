import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AcPaginationComponent} from './ac-pagination.component';
import {InfraPipesModule} from '../../pipes/infra.pipes.module';
import {AcButtonModule} from '../ac-button/ac-button.module';
import {AcSelectModule} from '../ac-select/ac-select.module';
import {AcIconsModule} from '../ac-icons/ac-icons.module';
import {AcSingleSelectModule} from '../ac-single-select/ac-single-select.module';
import {AcInputContainerModule} from '../ac-input-container/ac-input-container.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InfraPipesModule,
        AcButtonModule,
        AcSelectModule,
        AcIconsModule,
        AcSingleSelectModule,
        AcInputContainerModule
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
