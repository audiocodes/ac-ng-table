import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AcTableComponent} from './components/ac-table/ac-table.component';

import {AcTableHeaderComponent} from './components/ac-table-header/ac-table-header.component';
import {AcTableBodyComponent} from './components/ac-table-body/ac-table-body.component';
import {AcTableFooterComponent} from './components/ac-table-footer/ac-table-footer.component';
import {AcTableCellDirective} from './directives/ac-table-cell.directive';
import {AcTableClientComponent} from './components/ac-table-client/ac-table-client.component';
import {AcTableCursorComponent} from './components/ac-table-cursor/ac-table-cursor.component';
import {AcTableExpandedRowDirective} from './directives/ac-table-expanded-row.directive';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {AcFuncPipe} from '../utils/pipes/func.pipe';
import {AcPaginationModule} from '../utils/components/ac-pagination/ac-pagination.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        ScrollingModule,

        AcPaginationModule,
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
        AcFuncPipe,
    ],
    exports: [
        AcTableComponent,
        AcTableClientComponent,
        AcTableCursorComponent,
        AcTableExpandedRowDirective,
    ],
})
export class AcTableModule {
}
