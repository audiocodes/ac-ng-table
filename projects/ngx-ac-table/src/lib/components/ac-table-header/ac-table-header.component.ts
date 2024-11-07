import {Component, DestroyRef, EventEmitter, Inject, Input, Output, ViewChild} from '@angular/core';
import {AC_TABLE_CONFIG, AcTableColumn, AcTableConfig} from '../../models/ac-table.interface';
import {AcTableService} from '../../services/ac-table.service';
import {AcTableComponent} from '../ac-table/ac-table.component';


@Component({
    selector: '[ac-table-header]',
    templateUrl: './ac-table-header.component.html',
    styleUrls: ['./ac-table-header.component.less'],
})
export class AcTableHeaderComponent {
    @ViewChild('headerRow', {static: true}) headerRow: any;
    @Input() columns: AcTableColumn[];
    @Output() columnSort = new EventEmitter<AcTableColumn>();
    mutationObserver: MutationObserver;
    constructor(public acTableComponent: AcTableComponent,
                public acTableService: AcTableService,
                private destroyRef: DestroyRef,
                @Inject(AC_TABLE_CONFIG) public acTableConfig: AcTableConfig,
    ) {}

    ngOnInit() {
        this.mutationObserver = new MutationObserver(() => {
            this.acTableComponent.setColumnsWidth();
        });

        this.mutationObserver.observe(this.headerRow.nativeElement, {childList: true});
    }

    onColumnSort(column: AcTableColumn) {
        this.columnSort.emit(column);
    }

    ngOnDestroy() {
        this.mutationObserver.disconnect();
    }
}
