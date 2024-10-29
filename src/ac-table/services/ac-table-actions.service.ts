import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {AcTableActions} from '../state/ac-table.actions';
import {SessionStorageService} from '../../../services/session-storage.service';
import {AcTableState} from '../state/ac-table.state';
import {AC_TABLE_STATE_TOKEN} from '../state/ac-table-state.models';

@Injectable({
    providedIn: 'root'
})
export class AcTableActionsService {

    constructor(private store: Store) {
    }


    clearSelection(tableId: string){
        this.dispatch(new AcTableActions.ClearSelection(tableId));
    }

    setAllRowsExpansionState(tableId: string, isExpanded: boolean) {
        this.dispatch(new AcTableActions.SetAllRowExpansion(tableId, isExpanded));
    }

    setCollapseGroupsState = (tableId: string, collapsedGroups) => {
        this.dispatch(new AcTableActions.UpdateCollapsedGroups(tableId, collapsedGroups, false));
    }
    updateCollapseGroupsState = (tableId: string, collapsedGroups) => {
        this.dispatch(new AcTableActions.UpdateCollapsedGroups(tableId, collapsedGroups));
    }
    setAllCollapsedGroups = (tableId: string, collapsedState: boolean) => {
        this.dispatch(new AcTableActions.SetAllCollapsedGroups(tableId, collapsedState));
    }

    dispatch = (action) => {
        this.store.dispatch(action)
        SessionStorageService.notify();
    };
    clearColumnsWidth = (tableId: string) => {
        this.store.dispatch(new AcTableActions.ClearColumnsWidth(tableId));
    };

    getSettings = (tableId: string) => {
        return this.store.selectSnapshot<AcTableState>(AC_TABLE_STATE_TOKEN)[tableId]?.settings || {};
    };

    updateSettings = (tableId: string, settings: any, update = true) => {
        this.store.dispatch(new AcTableActions.UpdateTableSettings(tableId, settings, update));
    };
}
