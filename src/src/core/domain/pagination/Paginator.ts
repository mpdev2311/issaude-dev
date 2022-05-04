export class Pageable{
    sort : Sort;
    pageNumber: number = 0;
    pageSize: number = 20;
    offset: number = 20;
    paged: boolean;
    unpaged: boolean;
}

export class Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

export class BasePaginator<T> {
    content : T [];
    pageable: Pageable = new Pageable();
    last: boolean;
    totalElements: number = 0;
    totalPages: number = 0
    first: boolean = true;
    numberOfElements: number;
    size: number;
    number: number;
    sort: Sort;
    empty: boolean;
}