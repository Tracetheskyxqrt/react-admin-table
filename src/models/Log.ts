/*interface Category {
    id: string;
    name: string;
}*/

import {Category} from './Category';

export interface Log {
    id: string;
    content: string;
    isMarkedUp: boolean;
    categories: Category[];

    /*categories: [
        {
            id: string;
            name: string;
        }];*/
    //categoryId: string;
    //categoryName: string;
    //requestId: string;
}