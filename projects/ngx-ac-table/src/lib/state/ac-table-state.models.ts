import {StateToken} from '@ngxs/store';

export interface AcTableStateModels {
    [key: string]: any;
    resetPagingOnLoad?: boolean;
};
export const AC_TABLE_STATE_TOKEN = new StateToken<AcTableStateModels>('tableState');
export const AC_TABLE_STATE_DEFAULTS = {};
