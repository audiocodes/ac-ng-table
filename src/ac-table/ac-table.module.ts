import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AcTableComponent} from './ac-table.component';
import {AcProgressModule} from '../ac-progress/ac-progress.module';
import {InfraPipesModule} from '../../pipes/infra.pipes.module';
import {AcPaginationModule} from '../ac-pagination/ac-pagination.module';
import {InfraDirectivesModule} from '../../directives/infra.directives.module';
import {AcIconsModule} from '../ac-icons/ac-icons.module';
import {AcSearchModule} from '../ac-search/ac-search.module';
import {AcButtonModule} from '../ac-button/ac-button.module';
import {AcCheckboxGroupModule} from '../ac-checkbox-group/ac-checkbox-group.module';
import {AcDialogModule} from '../ac-dialog/ac-dialog.module';
import {AcCheckboxModule} from '../ac-checkbox/ac-checkbox.module';
import {AcTableHeaderComponent} from './components/ac-table-header/ac-table-header.component';
import {AcTableBodyComponent} from './components/ac-table-body/ac-table-body.component';
import {AcTableFooterComponent} from './components/ac-table-footer/ac-table-footer.component';
import {AcTableCellDirective} from './directives/ac-table-cell.directive';
import {AcTableClientComponent} from './components/ac-table-client/ac-table-client.component';
import {AcTableCursorComponent} from './components/ac-table-cursor/ac-table-cursor.component';
import {AcTableSettingsDialogComponent} from './dialogs/ac-table-settings-dialog/ac-table-settings-dialog.component';
import {AcTableExpandedRowDirective} from './directives/ac-table-expanded-row.directive';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        ScrollingModule,

        InfraPipesModule,
        InfraDirectivesModule,

        AcProgressModule,
        AcPaginationModule,
        AcIconsModule,
        AcSearchModule,
        AcButtonModule,
        AcCheckboxGroupModule,
        AcDialogModule,
        AcCheckboxModule,
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
        AcTableSettingsDialogComponent,
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
