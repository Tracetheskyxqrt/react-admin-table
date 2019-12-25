import { Dispatch } from 'redux';
import { Log } from '../../models/Log';
import { AppState } from '../../reducers';
import { request } from '../../lib/request';
import {Category} from '../../models/Category';

export const CREATE_LOG = 'CREATE_LOG';
export const UPDATE_LOG = 'UPDATE_LOG';
export const DELETE_LOG = 'DELETE_LOG';
export const SET_CURRENT_LOG = 'SET_CURRENT_LOG';

export const CREATE_NEW_LOG = 'CREATE_NEW_LOG';
export const SET_CATEGORIES = 'SET_CATEGORIES';
//export const SET_CATEGORY_ID_LOG = 'SET_CATEGORY_ID_LOG';
//export const SET_CATEGORY_NAME_LOG = 'SET_CATEGORY_NAME_LOG';

export const SET_REQUEST_ID_LOG = 'SET_REQUEST_ID_LOG';
export const SET_CONTENT_LOG = 'SET_CONTENT_LOG';
export const SET_IS_MARKED_UP_LOG = 'SET_IS_MARKED_UP_LOG';

export const GET_LOGS_REQUEST = 'GET_LOGS_REQUEST';
export const GET_LOGS_RESPONSE = 'GET_LOGS_RESPONSE';
export const GET_LOGS_ERROR = 'GET_LOGS_ERROR';

// Простые actions, которые вызывают изменения в хранилище
export const deleteLogAction = (id: string) => (dispatch: Dispatch<any>) => dispatch({
    type: DELETE_LOG,
    id,
});

export const createLogAction = () => (dispatch: Dispatch<any>, getState: () => AppState) => dispatch({
    type: CREATE_LOG,
    log: getState().adminTableState.newLog,
});

export const updateLogAction = () => (dispatch: Dispatch<any>, getState: () => AppState) => dispatch({
    type: UPDATE_LOG,
    log: getState().adminTableState.newLog,
});


export const setCurrentLogAction = (log: Log | null) => (dispatch: Dispatch<any>) => dispatch({
    type: SET_CURRENT_LOG,
    log,
});

/*
export const setCategoryIdAction = (categoryId: string) => (dispatch: Dispatch<any>) => dispatch({
    type: SET_CATEGORY_ID_LOG,
    categoryId,
});

export const setCategoryNameAction = (categoryName: string) => (dispatch: Dispatch<any>) => dispatch({
    type: SET_CATEGORY_NAME_LOG,
    categoryName,
});
*/

export const setCategoriesAction = (categories: Category[]) => (dispatch: Dispatch<any>) => dispatch({
    type: SET_CATEGORIES,
    categories,
});

export const setRequestIdAction = (requestId: string) => (dispatch: Dispatch<any>) => dispatch({
    type: SET_REQUEST_ID_LOG,
    requestId,
});

export const setContentAction = (content: string) => (dispatch: Dispatch<any>) => dispatch({
    type: SET_CONTENT_LOG,
    content,
});

export const setIsMarkedUpAction = (isMarkedUp: boolean) => (dispatch: Dispatch<any>) => dispatch({
    type: SET_IS_MARKED_UP_LOG,
    isMarkedUp,
});

export const createNewLogAction = (log?: Log) => (dispatch: Dispatch<any>) => dispatch({
    type: CREATE_NEW_LOG,
    log,
});

// Actions с запросами куда либо
export const getCitiesAction = (q = '') => (dispatch: Dispatch<any>) => {
    dispatch({
        type: GET_LOGS_REQUEST
    });

    return request(`${process.env.SERVER_NAME}/api/v1/cities?q=${q}`, {
        method: 'GET',
        headers: new Headers({
            'authorization': `basic ${process.env.SERVER_KEY}`
        })
    }).then(response => dispatch({
        type: GET_LOGS_RESPONSE,
        response
    })).catch(error => dispatch({
        type: GET_LOGS_ERROR,
        error
    }));
};

