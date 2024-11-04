import {Observable} from 'rxjs';

interface ThrottleClassOptions<T extends (...args: any[]) => any> {
    callback: T;
    destroyComponentOperator?: any;
    maxRecurrentTime: number;
    leading?: boolean;
    trailing?: boolean;
    debounce?: number;
    maxDebounceTime?: number;
    oneAtATime?: boolean;
    handleArgs?: (newArgs: Parameters<T>, lastArgs: Parameters<T>) => any;
}

export class ThrottleClass<T extends (...args: any[]) => any = (...args: any[]) => any> {
    private static readonly _destroyPlaceholder$ = new Observable();
    private readonly maxRecurrentTime: number;
    private readonly shouldLead: any;
    private readonly shouldTrailing: any;
    private readonly maxDebounceTime: number;
    private readonly debounce: number;
    private readonly callback: any;
    private trailingTimeout: any;
    private lastCallBack = 0;
    private lastArgs: any;
    private initialLeadingTime = 0;
    private debounceTimeout: any;
    private callbackIsRunning = false;
    private trailingPending = false;
    private readonly oneAtATime: boolean;

    constructor(
        {
            callback,
            destroyComponentOperator,
            maxRecurrentTime,
            handleArgs,
            leading = true,
            trailing = true,
            oneAtATime = false,
            debounce = 0,
            maxDebounceTime = 0,
        }: ThrottleClassOptions<T>
    ) {
        if (handleArgs) {
            this.handleArgs = handleArgs;
        }
        this.callback = callback;
        this.maxRecurrentTime = maxRecurrentTime;
        this.shouldLead = leading;
        this.shouldTrailing = trailing;
        this.debounce = debounce;
        this.oneAtATime = oneAtATime;
        this.maxDebounceTime = maxDebounceTime > this.maxRecurrentTime ? this.maxRecurrentTime : maxDebounceTime;

        destroyComponentOperator && ThrottleClass._destroyPlaceholder$.pipe(destroyComponentOperator).subscribe({
            complete: () => this.clearAllTimeouts()
        });
    }

    oneAtATimeFinished = () => {
        this.callbackIsRunning = false;
        if (this.trailingPending) {
            this.setTrailing();
        }
    };

    tick = (...newArgs: Parameters<T>) => {
        this.lastArgs = this.handleArgs(newArgs, this.lastArgs);

        if (this.shouldLead && (!this.oneAtATime || !this.callbackIsRunning) && !this.trailingTimeout && this.lastCallBack + this.maxRecurrentTime < Date.now()) {
            return this.doLeading();
        }

        if (this.oneAtATime && this.callbackIsRunning) {
            this.trailingPending = true;
        } else {
            this.setTrailing();
        }
    };

    forceTick = (...args: Parameters<T>) => {
        this.lastCallBack = 0;
        this.clearAllTimeouts();
        this.tick(...args);
    };

    updateOptions(options: any) {
        Object.assign(this, options);
    }

    private handleArgs = (newArgs: any[], lastArgs: any[]) => {
        return newArgs;
    };

    private setTrailing() {
        if (this.shouldTrailing && !this.trailingTimeout && !this.debounceTimeout) {
            const timeUntilEnd = this.maxRecurrentTime - (Date.now() - this.lastCallBack);
            this.trailingPending = false;
            this.trailingTimeout = setTimeout(this.doTrailing, timeUntilEnd);
        }
    }

    private doLeading = () => {
        // need to reset
        if (this.shouldLead && this.debounce) {
            this.initialLeadingTime = this.initialLeadingTime || Date.now();
            const timeUntilMaxDebounce = this.initialLeadingTime + this.maxDebounceTime - Date.now();

            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = setTimeout(() => {
                this.initialLeadingTime = 0;

                clearTimeout(this.debounceTimeout);
                delete this.debounceTimeout;
                this.callCallback();
            }, this.debounce > timeUntilMaxDebounce ? timeUntilMaxDebounce : this.debounce);

        } else if (this.shouldLead) {
            return this.callCallback();
        }
    };

    private doTrailing = () => {
        clearTimeout(this.trailingTimeout);
        delete this.trailingTimeout;
        this.callCallback();
    };

    private callCallback = () => {
        this.callbackIsRunning = true;
        this.lastCallBack = Date.now();
        this.callback(...(this.lastArgs || []));
    };

    private clearAllTimeouts() {
        clearTimeout(this.trailingTimeout);
        delete this.trailingTimeout;

        clearTimeout(this.debounceTimeout);
        delete this.debounceTimeout;
    }
}

