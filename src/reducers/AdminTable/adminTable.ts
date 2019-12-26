import { Action } from 'redux';
import { OrderedMap } from 'immutable';
import * as uuid from 'uuid';
import { Category } from '../../models/Category';

import {
    CREATE_LOG,
    UPDATE_LOG,
    DELETE_LOG,
    SET_CURRENT_LOG,
    CREATE_NEW_LOG,

    SET_CATEGORIES,
    SET_REQUEST_ID_LOG,
    SET_CONTENT_LOG,
    SET_IS_MARKED_UP_LOG,

    GET_LOGS_REQUEST,
    GET_LOGS_RESPONSE,
    GET_LOGS_ERROR
} from '../../actions/AdminTable/adminTable';

import { Log } from '../../models/Log';
import {ServerResponse} from '../../models/ServerResponse';
import {request} from '../../lib/request';
import {Promise} from 'q';

const arrLogs: Log[] = [{
        id: '1',
        categories: [
            {
                id: '4',
                name: 'Заказать еду',
            },
            {
                id: '5',
                name: 'Еда',
            },
            {
                id: '6',
                name: 'Заказ',
            },
            {
                id: '7',
                name: 'Суши',
            },
            {
                id: '8',
                name: 'Доставка',
            },
            {
                id: '9',
                name: 'Лень',
            },
            {
                id: '10',
                name: 'Быстро',
            },
            {
                id: '11',
                name: 'Услуги',
            }
        ],
        content: 'закажи суши',
        is_marked_up: true,
    },
    {
        id: '2',
        categories: [
            {
                id: '1',
                name: "Курс валют"
            }
        ],
        content: "Сколько стоит евро?",
        is_marked_up: true
    },
    {
        id: '3',
        categories: [
            {
                id: '1',
                name: "Курс валют"
            }
        ],
        content: "Сколько стоит доллар?",
        is_marked_up: true
    },
    {
        id: '4',
        categories: [
            {
                id: '1',
                name: "Курс валют"
            }
        ],
        content: "курс доллара на завтра?",
        is_marked_up: true
    },
    {
        id: '5',
        categories: [
            {
                id: '1',
                name: "Курс валют"
            }
        ],
        content: "курс евро на завтра?",
        is_marked_up: true
    },
    {
        id: '6',
        categories: [
            {
                id: '1',
                name: "Курс валют"
            }
        ],
        content: "сколько будет стоить евро завтра?",
        is_marked_up: true
    },
    {
        id: '7',
        categories: [
            {
                id: '1',
                name: "Курс валют"
            }
        ],
        content: "сколько будет стоить рубль?",
        is_marked_up: true
    }
]

//let data = request<ServerResponse>('http://intent-classification-app.herokuapp.com/api/admin/requests/?format=json',
    //{method: 'GET', body: undefined, headers: undefined});
//var response =await fetch('http://intent-classification-app.herokuapp.com/api/admin/requests/?format=json');
//const data: ServerResponse = JSON.parse(String(response));
//alert(data.result[0].categories[0].name);

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
                logs: state.logs.set(log.id, log),
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
                id: uuid.v1(),
                categories: null, //********
                requestId: '',
                content: '',
                isMarkedUp: false,
            };
            return {
                ...state,
                newLog: log,
            };
        }
        case SET_CATEGORIES: {
            const categories = (action as any).categories
            return {
                ...state,
                newLog: {
                    ...state.newLog,
                    categories
                },
            };
        }
        case SET_REQUEST_ID_LOG: {
            const requestId = (action as any).requestId;
            return {
                ...state,
                newLog: {
                    ...state.newLog,
                    requestId,
                },
            };
        }
        case SET_CONTENT_LOG: {
            const content = (action as any).content;
            return {
                ...state,
                newLog: {
                    ...state.newLog,
                    content,
                },
            };
        }
        case SET_IS_MARKED_UP_LOG: {
            const isMarkedUp = (action as any).is_marked_up;
            return {
                ...state,
                newLog: {
                    ...state.newLog,
                    is_marked_up: isMarkedUp,
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
