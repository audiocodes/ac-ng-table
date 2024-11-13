import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AcTableComponent} from './components/ac-table/ac-table.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {AcPaginationModule} from '../utils/components/ac-pagination/ac-pagination.module';
import {PipesModule} from '../utils/pipes/pipes.module';
import {AcTableHeaderComponent} from './components/ac-table-header/ac-table-header.component';
import {AcTableBodyComponent} from './components/ac-table-body/ac-table-body.component';
import {AcTableFooterComponent} from './components/ac-table-footer/ac-table-footer.component';
import {AcTableCellDirective} from './directives/ac-table-cell.directive';
import {AcTableExpandedRowDirective} from './directives/ac-table-expanded-row.directive';
import {AcTableClientComponent} from './components/ac-table-client/ac-table-client.component';
import {AcTableCursorComponent} from './components/ac-table-cursor/ac-table-cursor.component';
import {AcLabelDirective} from '../utils/directives/ac-label.directive';
import {AC_TABLE_CONFIG, AcTableConfig} from './models/ac-table.interface';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        ScrollingModule,

        AcPaginationModule,
        PipesModule,
    ],
    declarations: [
        AcTableComponent,
        AcTableHeaderComponent,
        AcTableBodyComponent,
        AcTableFooterComponent,
        AcTableCellDirective,
        AcTableExpandedRowDirective,
        AcTableClientComponent,
        AcTableCursorComponent,
        AcLabelDirective,
    ],
    exports: [
        AcTableComponent,
        AcTableClientComponent,
        AcTableCursorComponent,
        AcTableExpandedRowDirective,
    ],
    providers: [
        {
            provide: AC_TABLE_CONFIG,
            useValue: {}
        },
    ],
})
export class AcTableModule {
    // static forRoot(acTableConfig: AcTableConfig): ModuleWithProviders<AcTableModule> {
    //     if (!acTableConfig) {
    //         acTableConfig = {};
    //     }
    //
    //     return {
    //         ngModule: AcTableModule,
    //         providers: [
    //             {
    //                 provide: AC_TABLE_CONFIG,
    //                 useValue: acTableConfig
    //             },
    //         ],
    //     };
    // }
}
