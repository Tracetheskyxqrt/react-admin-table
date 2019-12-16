import { Action } from 'redux';
import { OrderedMap } from 'immutable';
import * as uuid from 'uuid';

import {
    CREATE_LOG,
    UPDATE_LOG,
    DELETE_LOG,
    SET_CURRENT_LOG,
    CREATE_NEW_LOG,

    SET_CATEGORY_ID_LOG,
    SET_CATEGORY_NAME_LOG,
    SET_REQUEST_ID_LOG,
    SET_CONTENT_LOG,
    SET_IS_MARKED_UP_LOG,

    GET_LOGS_REQUEST,
    GET_LOGS_RESPONSE,
    GET_LOGS_ERROR
} from '../../actions/AdminTable/adminTable';

import { Log } from '../../models/Log';

function createData(id: string, categoryId: string, categoryName: string,
                    requestId: string, content: string, isMarkedUp: boolean) {
    return { id, categoryId, categoryName, requestId, content, isMarkedUp };
}

const arrLogs = [
    createData('1', '213', 'category1', '1', 'content1', true),
    createData('2', '123', 'category2', '2', 'content2',true),
    createData('3', '124', 'category3', '3', 'content3',true),
    createData('4', '345', 'category4', '4', 'content4',true),
    createData('5', '676', 'category5', '5', 'content1',false),
];

export interface AdminTableState {
    logs: OrderedMap<string, Log>;
    loading: boolean;
    currentLog: Log | null;
    newLog: Log | null;
    cities: OrderedMap<number, any>;
    loadingCities: boolean;
    errorCities: any;
}

const initialState: AdminTableState = {
    logs: arrLogs.reduce((prev, cur) => prev.set(cur.id, cur), OrderedMap<string, Log>()),
    loading: false,
    currentLog: null,
    newLog: null,
    cities: OrderedMap<number, any>(),
    loadingCities: false,
    errorCities: null,
};

export function adminTableState(state: AdminTableState = initialState, action: Action) {
    switch (action.type) {
        // Обработка простых action
        case CREATE_LOG:
        case UPDATE_LOG: {
            const log = (action as any).log;
            return {
                ...state,
                tasks: state.logs.set(log.id, log),
                currentLog: log,
                newLog: null,
            };
        }
        case DELETE_LOG: {
            const id = (action as any).id;
            return {
                ...state,
                logs: state.logs.remove(id),
                currentLog: null,
                newLog: null,
            };
        }
        case SET_CURRENT_LOG: {
            const log = (action as any).log;
            return {
                ...state,
                currentLog: log,
            };
        }
        case CREATE_NEW_LOG: {
            const log = (action as any).log || {
                id: uuid.v1(), //Должно быть: 'id: uuid(),'
                categoryId: '',
                categoryName: '',
                requestId: '',
                content: '',
                isMarkedUp: false,
            };
            return {
                ...state,
                newLog: log,
            };
        }
        case SET_CATEGORY_ID_LOG: {
            const categoryId = (action as any).categoryId;
            return {
                ...state,
                newTask: {
                    ...state.newLog,
                    categoryId,
                },
            };
        }
        case SET_CATEGORY_NAME_LOG: {
            const categoryName = (action as any).categoryName;
            return {
                ...state,
                newTask: {
                    ...state.newLog,
                    categoryName,
                },
            };
        }
        case SET_REQUEST_ID_LOG: {
            const requestId = (action as any).requestId;
            return {
                ...state,
                newTask: {
                    ...state.newLog,
                    requestId,
                },
            };
        }
        case SET_CONTENT_LOG: {
            const content = (action as any).content;
            return {
                ...state,
                newTask: {
                    ...state.newLog,
                    content,
                },
            };
        }
        case SET_IS_MARKED_UP_LOG: {
            const isMarkedUp = (action as any).isMarkedUp;
            return {
                ...state,
                newTask: {
                    ...state.newLog,
                    isMarkedUp,
                },
            };
        }

        // Обработка actions с запросами
        case GET_LOGS_REQUEST: {
            return {
                ...state,
                loadingCities: true,
                errorCities: initialState.errorCities
            };
        }
        case GET_LOGS_RESPONSE: {
            const result: any[] = (action as any).response.result;
            const cities = result.reduce((prev, cur) => {
                prev = prev.set(cur.id, cur);
                return prev;
            }, initialState.cities);
            return {
                ...state,
                loadingCities: false,
                cities
            };
        }
        case GET_LOGS_ERROR: {
            const errorCities = (action as any).error;
            return {
                ...state,
                errorCities,
                loadingCities: false
            };
        }

        default: {
            return state;
        }
    }
}
