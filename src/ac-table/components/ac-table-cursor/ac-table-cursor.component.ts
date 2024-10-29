import {ChangeDetectionStrategy, Component, forwardRef, Input, ViewChild,} from '@angular/core';

import {UntilDestroy} from '@ngneat/until-destroy';
import {cloneDeep} from 'lodash';
import {AcTableComponent} from '../../ac-table.component';
import {AcPaginationComponent} from '../../../ac-pagination/ac-pagination.component';
import {AcTableActions} from '../../state/ac-table.actions';
import {AcTableState} from '../../state/ac-table.state';
import {AC_TABLE_STATE_TOKEN} from '../../state/ac-table-state.models';
import {AcPagingEvent} from '../../../ac-pagination/ac-paging.interface';

export interface AcTableCursor {
    [key: string]: any;
    current?: AcTableCursor;
    after?: string;
    before?: string;
}

@UntilDestroy()
@Component({
    selector: 'ac-table-cursor',
    templateUrl: '../../ac-table.component.html',
    styleUrls: ['../../ac-table.component.less'],
    providers: [{provide: AcTableComponent, useExisting: forwardRef(() => AcTableCursorComponent)}],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcTableCursorComponent extends AcTableComponent {

    @ViewChild(AcPaginationComponent, {static: false}) acPagination: AcPaginationComponent;

    setRows(rows) {
        this.totalElements = rows?.length || 0;
        super.setRows(rows);
    }

    _cursor: AcTableCursor = {};
    @Input() set cursor(cursor) {
        if (!cursor) {
            return;
        }
        this._cursor = {...cursor, current: this._cursor.current};
        this.store.dispatch(new AcTableActions.UpdateCursor(this.tableId, this._cursor));
        this.acPagination.isLastPage = !cursor.after || cursor.after === -1  || cursor.after === '-1';
        this.acPagination.update();
    }

    ngAfterViewInit() {
        this.acPagination.showLast = false;
        this.acPagination.pagePicker = false;
        this.acPagination.updateLastPage = false;
        this.acPagination.itemsDisplayType = 'itemsCount';
        this.acPagination.update();

        const tableState = this.store.selectSnapshot<AcTableState>(AC_TABLE_STATE_TOKEN)[this.tableId];
        if (tableState?.cursor) {
            this._cursor = cloneDeep(tableState.cursor);
        }

        super.ngAfterViewInit();
    }


    onPageChange(paging?: AcPagingEvent) {
        this.acPagination.isLastPage = true;
        const prevPageIndex = this.pageIndex;
        super.onPageChange(paging, false);
        const dirType = this.pageIndex > prevPageIndex ? 'after' : 'before';

        this._cursor.current = this.pageIndex > 1 && {[dirType]: this._cursor[dirType]};
        this.dispatchPaging(this.getPaging());
    }

    dispatchAcTableEvent({...args}: any) {
        super.dispatchAcTableEvent( {
            ...args,
            additionalData: this._cursor.current ? {cursor: this._cursor.current} : undefined
        });
    }
}
