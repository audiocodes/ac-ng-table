export namespace AcTableDataActions {

    export class SetRows {
        static readonly type = '[Table Data] Set';

        constructor(public tableId: string, public rows: any[]) {
        }
    }

    export class UpdateRows {
        static readonly type = '[Table Data] Update';

        constructor(public tableId: string, public rows: any[]) {
        }
    }

    export class ClearRows {
        static readonly type = '[Table Data] Clear';

        constructor(public tableId: string) {
        }
    }
}
