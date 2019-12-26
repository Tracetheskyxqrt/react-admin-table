import {Category} from './Category';

export interface Log {
    id: string;
    categories: Category[];
    content: string;
    is_marked_up: boolean;
}