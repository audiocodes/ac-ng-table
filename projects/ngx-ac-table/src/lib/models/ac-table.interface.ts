import {ComponentRef, EventEmitter, InjectionToken, TemplateRef, Type, ViewContainerRef} from "@angular/core";
import {AcPaging, AcPagingEvent} from '../../utils/components/ac-pagination/ac-paging.interface';

export interface AcTableSharedInputs {
    idField: string;
    itemSize: number;
    minBufferPx: number;
    maxBufferPx: number;
    autoResizeLastColumn: boolean;
    defaultLayout: LayoutType;
    dblClickResizeIncludeHeader: boolean;
    footer: boolean;
    multiSort: boolean;
    selection: any;
    multiSelection: boolean;
    selectBehavior: SelectBehavior;
    forceSelection: boolean;
    collapsedGroups: { [key: string]: boolean };
    groupBy: ((...args) => string) | string;
    minCellWidth: number;
    infiniteScroll;
    noDataComponent: Type<any>;
}

export type AcTableConfig = Partial<AcTableSharedInputs>;

export const AC_TABLE_CONFIG = new InjectionToken<AcTableConfig>('ac.table.config');

export enum ESelectBehavior {
    select = 'select',
    toggle = 'toggle',
}

export type SelectBehavior = keyof typeof ESelectBehavior;

export enum ELayoutType {
    byColumn = 'byColumn',
    byFit = 'byFit',
}

export type LayoutType = keyof typeof ELayoutType;

export interface AcTableRow {
    id: string | number;
    data: any;
    _groupId?: string;
}

export interface AcTableCell {
    viewContainerRef: ViewContainerRef;
    getValue: () => any;
    getTableRow?: () => any;
    getRow: () => any;
    getField: () => any;
}

interface SortedColumn {
    field?: string;
    sorter?: string;
    sortField?: string;
}

export interface ColumnProperties extends SortedColumn {
    field?: string;
    title?: string;

    disableSort?: boolean;
    headerSort?: boolean;

    stickyLeft?: boolean;

    titleFunc?: (cell) => string;
    statusMap?: any;
    nullValue?: any;
    isActive?: boolean;
    configurable?: boolean;
    columnNumber?: string;

    width?: number;
    widthGrow?: number;
    widthGroup?: string;
    widthByHeader?: boolean;
    minWidth?: number;
    minWidthByHeader?: boolean;

    template?: TemplateRef<any>;
    formatter?: (cell: AcTableCell) => any;
    titleFormatter?: any;
    footerFormatter?: any;
    withFormatter?: any;
    filter?: any;
    isResizable?: boolean;
    align?: string;
    isVisible?: boolean;

    cellClass?: string;

    onCellClick?: (...args: any[]) => any;
    onRowSelection?: (selection: boolean, contentRef: any | ComponentRef<any>) => any
}

export interface AcTableColumn extends ColumnProperties {
    field: string;
    colWidth?: number;
}

export type SorterFunc = (r1, r2, dir, ...args) => number;


export interface AcTableSort {
    [field: string]: AcTableSorter;
}

export interface AcTableSorter extends SortedColumn {
    dir?: string;
    order?: number;
}

export interface AcTableSorters {
    [sorterType: string]: SorterFunc;
}

export type AcTableEventType =
    'initialized'
    | 'updatePaging'
    | 'updateData'
    | 'infiniteScrollUpdate'
    | 'rowsUpdate'
    | 'sortChange'
    | 'collapsedGroupsChanged'
    | 'selectionChanged'
    | 'tableUpdate';

export interface AcTableEvent {
    [key: string]: any;

    type: AcTableEventType;
    paging: AcPaging;
    sorting: AcTableSort;
    selection?: { [key: string]: any };
    collapsedGroups?: { [key: string]: boolean };
}

export interface AcTableDispatchEvent {
    emitter: EventEmitter<AcTableEvent>;
    type: AcTableEventType;
    paging?: AcPagingEvent | AcPaging;
    loadingState?: boolean;
    additionalData?: any;
    tableUpdate?: boolean;
}

export interface AcTableScrollPosition {
    [key: number]: number;
}

export interface RefreshTableProperties {
    showLoader?: boolean;
    clearSelection?: boolean;
    gotoPage?: number;
    entityName?: string;
    selection?: any[];
}
