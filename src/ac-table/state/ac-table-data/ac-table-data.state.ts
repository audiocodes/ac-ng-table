import {Injectable} from '@angular/core';
import {Action, createSelector, State, StateContext, StateToken} from '@ngxs/store';
import {AcTableDataActions} from './ac-table-data.actions';

export type AcTableDataStateModels = any;
export const AC_TABLE_DATA_TOKEN = new StateToken<AcTableDataStateModels>('tableData');

@State({
    name: AC_TABLE_DATA_TOKEN,
    defaults: {}
})
@Injectable({providedIn: 'root'})
export class AcTableDataState {

    static createMemoizedSelector(tableId: string) {
        // memoize selection as sub state
        return createSelector([AcTableDataState], (state: AcTableDataStateModels) => {
            return state?.[tableId];
        });
    }

    static rowsUpdated(tableId: string) {
        return createSelector([AcTableDataState.createMemoizedSelector(tableId)], (rows: any) => {
            return rows;
        });
    }

    static rowsInitialized(tableId: string) {
        return createSelector([AcTableDataState.createMemoizedSelector(tableId)], (rows: any) => {
            return !!rows;
        });
    }

    @Action([AcTableDataActions.SetRows, AcTableDataActions.UpdateRows])
    SetRows(ctx: StateContext<AcTableDataStateModels>, {tableId, rows}: AcTableDataActions.SetRows) {
        ctx.patchState({[tableId]: rows});
    }

    @Action(AcTableDataActions.ClearRows)
    ClearRows(ctx: StateContext<AcTableDataStateModels>, {tableId}: AcTableDataActions.ClearRows) {
        ctx.patchState({[tableId]: null});
    }
}
