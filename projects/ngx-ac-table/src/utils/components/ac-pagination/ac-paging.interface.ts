export interface AcPaging {
    page: number;
    size?: number;
}

export interface AcPagingEvent extends AcPaging {
    type?: string;
}
