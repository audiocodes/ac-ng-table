import {Component, Inject} from '@angular/core';
import {AcDialogComponent} from '../../../ac-dialog/ac-dialog.component';
import {AcDialog, DIALOG_CONFIG, DialogConfig} from '../../../ac-dialog/ac-dialog.models';
import {AcTableActionsService} from '../../services/ac-table-actions.service';
import {AcTableColumn} from '../../models/ac-table.interface';

@AcDialog({
    id: 'ac-table-settings',
    title: `Table Settings`,
    width: 400,
})
@Component({
    selector: 'ac-table-settings-dialog',
    templateUrl: './ac-table-settings-dialog.component.html',
    styleUrls: ['./ac-table-settings-dialog.component.less'],
})
export class AcTableSettingsDialogComponent {

    columnsGroupItems: any[];
    groupState = {};

    constructor(private acDialogComponent: AcDialogComponent,
                @Inject(DIALOG_CONFIG) public dialogConfig: DialogConfig,
                private acTableActionsService: AcTableActionsService) {
        const {dialogData} = this.dialogConfig;
        this.setColumnsGroup(dialogData.columns);
    }


    setColumnsGroup = (tableColumns: AcTableColumn[]) => {
        const {columnVisibility} = this.acTableActionsService.getSettings(this.dialogConfig.dialogData.tableId);

        const configurableColumns = tableColumns.filter(({configurable}) => configurable);
        this.columnsGroupItems = configurableColumns.map(({field, title}) => ({
            name: field,
            text: title,
            value: field
        }));

        configurableColumns.forEach(({field, isActive, isVisible}) => {
            this.groupState[field] = columnVisibility ? columnVisibility[field] : (isActive && (isVisible !== false));
        });
        this.updateCheckboxGroupItems();
    };

    groupChange([{name, value}]: any) {
        this.groupState[name] = value;
        this.updateCheckboxGroupItems();
    }

    updateCheckboxGroupItems = () => {
        const [enabledColumn, ...restColumns] = Object.entries(this.groupState).filter(([key, val]) => val).map(([key]) => key);
        const lastEnabledGroupName = restColumns.length === 0 ? enabledColumn : '';

        this.columnsGroupItems = this.columnsGroupItems.map((groupItem) => groupItem.name === lastEnabledGroupName ? {
            ...groupItem,
            disabled: true
        } : {...groupItem, disabled: false});

        this.dialogConfig.dialogData.columnVisibility = this.groupState;
    };

    resetClick() {
        this.dialogConfig.dialogData.reset();
        this.acDialogComponent.close();
    }
}
