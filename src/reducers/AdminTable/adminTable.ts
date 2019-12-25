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

    //SET_CATEGORY_ID_LOG,
    //SET_CATEGORY_NAME_LOG,
    SET_CATEGORIES,
    SET_REQUEST_ID_LOG,
    SET_CONTENT_LOG,
    SET_IS_MARKED_UP_LOG,

    GET_LOGS_REQUEST,
    GET_LOGS_RESPONSE,
    GET_LOGS_ERROR
} from '../../actions/AdminTable/adminTable';

import { Log } from '../../models/Log';

function createLog(id: string, categories: Category[], content: string, isMarkedUp: boolean ) {
    return {id, content, isMarkedUp, categories };
}

const arrLogs = [
    createLog('0', [{id: '0', name: '1883 год'}, {id: '1', name: 'category1'},
        {id: '1', name: 'Фридрих Ницше'}, {id: '1', name: 'category1'}, {id: '1', name: 'category1'},
        {id: '1', name: 'category1'}, {id: '1', name: 'category1'}, {id: '1', name: 'category1'},
        {id: '1', name: '«ТАК ГОВОРИЛ ЗАРАТУСТРА»'}, {id: '1', name: 'category1'}, {id: '1', name: 'category1'},
        {id: '1', name: 'category1'}, {id: '1', name: 'цитаты из книги'}, {id: '1', name: 'category1'}],
        'Честь и стыд перед сном! Это первое! И избегайте встречи с теми, кто плохо спит и бодрствует ночью!\n' +
        'Стыдлив и вор в присутствии сна: потихоньку крадется он в ночи. Но нет стыда у ночного сторожа: не стыдясь, трубит он в свой рог.\n' +
        'Уметь спать — не пустяшное дело: чтобы хорошо спать, надо бодрствовать в течение целого дня.\n' +
        'Десять раз должен ты днём преодолеть самого себя: это даст хорошую усталость, это мак души.\n' +
        'Десять раз должен ты мириться с самим собою: ибо преодоление есть обида, и дурно спит непомирившийся.\n' +
        'Десять истин должен найти ты в течение дня: иначе ты будешь и ночью искать истины и твоя душа останется голодной.\n' +
        'Десять раз должен ты смеяться в течение дня и быть весёлым: иначе будет тебя ночью беспокоить желудок, этот отец скорби.', true),
    createLog('1', [{id: '0', name: 'category1'}], 'content1', true),
    createLog('2', [{id: '0', name: 'category2'}], 'content2', true),
    createLog('3', [{id: '0', name: 'category3'}], 'content3', true),
    createLog('4', [{id: '0', name: 'category4'}], 'content4', false),
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
                id: uuid.v1(), //Должно быть: 'id: uuid(),'
                //categoryId: '',
                //categoryName: '',
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
        /*
        case SET_CATEGORY_ID_LOG: {
            const categoryId = (action as any).categoryId;
            return {
                ...state,
                newLog: {
                    ...state.newLog,
                    categoryId,
                },
            };
        }
        case SET_CATEGORY_NAME_LOG: {
            const categoryName = (action as any).categoryName;
            return {
                ...state,
                newLog: {
                    ...state.newLog,
                    categoryName,
                },
            };
        }*/

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
            const isMarkedUp = (action as any).isMarkedUp;
            return {
                ...state,
                newLog: {
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
