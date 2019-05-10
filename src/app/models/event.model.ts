export interface IEvent {
    id : number,
    user: string,
    event : string,
    timestamp : string
}

export interface IEventPaginate {
    current_page: number,
    data: IEvent[],
    first_page_url: string,
    from: number,
    next_page_url: string,
    path: string,
    per_page: number,
    prev_page_url: string,
    to: number
}