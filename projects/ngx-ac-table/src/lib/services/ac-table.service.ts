import {ComponentRef, Injectable, RendererFactory2, Type, ViewContainerRef} from '@angular/core';
import {AcTableColumn, AcTableRow} from '../models/ac-table.interface';
import {Subscription} from 'rxjs';

export type ComponentInputs<T> = { [key: string]: any } | T;
export type ComponentAttributes ={ [key: string]: any };
export type ComponentStyles = Array<{style: string, value: string}>;

export interface createComponentOptions<T = any> {
    componentInputs?: ComponentInputs<T>;
    attributes?: ComponentAttributes;
    styles?: ComponentStyles;
    projectableNodes?: any[][];
}

@Injectable({
    providedIn: 'root'
})
export class AcTableService {
    private renderer;
    readonly SELECT_DEBOUNCE_TIME = 500;
    readonly NO_DEBOUNCE = 0;

    constructor(private rendererFactory2: RendererFactory2) {
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }

    get selectDebounceTime() {
        // return GeneralService.testMode ? this.NO_DEBOUNCE : this.SELECT_DEBOUNCE_TIME; // TODO: General Service
        return this.SELECT_DEBOUNCE_TIME;
    }

    trackById = (index: number, row) => row.id;
    trackByField = (index: number, column) => column.field;

    getLimitedWidth = (width: number, minValue = 0): number => {
        return isNaN(width) ? null : Math.max(width, minValue);
    }

    getRowIndexById = (rows: AcTableRow[], rowId) => {
        if (!rowId) {
            return 0;
        }
        return rows?.findIndex(row => row.id === rowId);
    };

    createNativeColumnFormatter<T>(viewContainerRef: ViewContainerRef, componentType: Type<T>, componentOptions: createComponentOptions<T> =  {}, registerObservers: (componentRef: ComponentRef<T>) => Subscription[]) {
        const componentRef = this.createComponentRef(viewContainerRef, componentType, componentOptions);

        const subs = registerObservers(componentRef);

        componentRef.onDestroy(() => subs.forEach((sub) => sub.unsubscribe()));
        return componentRef;
    }

    createNativeColumn = (tableId: string, activeColumns: Array<AcTableColumn>, columnProps: AcTableColumn): AcTableColumn => {
        if (activeColumns?.find((activeColumn) => activeColumn?.field === columnProps.field)) {
            return null;
        }

        return {
            title: ' ',
            isResizable: false,
            configurable: false,
            ...columnProps,
        };
    }

    createComponentRef<T>(viewContainerRef: ViewContainerRef, componentType: Type<T>, componentOptions: createComponentOptions<T> =  {}) {
        const componentRef = viewContainerRef.createComponent(componentType, {projectableNodes: (componentOptions.projectableNodes)});

        componentOptions.componentInputs && Object.assign(componentRef.instance, componentOptions.componentInputs);

        componentOptions.attributes && Object.getOwnPropertyNames(componentOptions.attributes).forEach((attributeName) => {
            this.renderer.setAttribute(componentRef.location.nativeElement, attributeName, componentOptions.attributes[attributeName]);
        });

        componentOptions.styles?.forEach(({style, value}) => {
            this.renderer.setStyle(componentRef.location.nativeElement, style, value);
        });

        return componentRef;
    };
}
