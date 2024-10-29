import {Component, Inject, Input} from '@angular/core';
import {UntilDestroy} from '@ngneat/until-destroy';
import {AC_TABLE_CONFIG, AcTableColumn, AcTableConfig} from '../../models/ac-table.interface';
import {AcTableComponent} from '../../ac-table.component';
import {AcTableService} from '../../services/ac-table.service';


@UntilDestroy()
@Component({
    selector: '[ac-table-footer]',
    templateUrl: './ac-table-footer.component.html',
    styleUrls: ['./ac-table-footer.component.less'],
})
export class AcTableFooterComponent {
    @Input() columns: AcTableColumn[];

    constructor(public acTableComponent: AcTableComponent,
                public acTableService: AcTableService,
                @Inject(AC_TABLE_CONFIG) public acTableConfig: AcTableConfig) {
    }

}
