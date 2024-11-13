import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngxs/store';
import {AcTableState} from '../../../ngx-ac-table/src/lib/state/ac-table.state';
import {AcTableDataState} from '../../../ngx-ac-table/src/lib/state/ac-table-data/ac-table-data.state';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideStore([AcTableState, AcTableDataState]),
    ]
};
