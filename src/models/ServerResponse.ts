import {Log} from "./Log";

export interface ServerResponse {
    result: Log[];
    pagination?: {
        total_pages: string;
        total_count: string;
        next_page: string;
    }
    error: string;
}