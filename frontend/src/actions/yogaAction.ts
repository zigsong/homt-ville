import axios from 'axios';
// import { Dispatch } from 'redux';
// import { ThunkAction } from 'redux-thunk';
// import { createAction } from 'redux-actions';
// import { createStandardAction, ActionType } from 'typesafe-actions'
import { Action } from 'redux';
import { RootState } from '../reducers/index'; 
import { ThunkAction } from 'redux-thunk';
import { Yoga, YogaList, REQUEST_LIST, REQUEST_BRANCH, GET_LIST, YogaActionTypes } from './types';

// export const REQUEST_LIST = 'yogaAction/REQUEST_LIST' as const; // as const의 역할
// export const GET_LIST = 'yogaAction/GET_LIST' as const; 
// export const REQUEST_BRANCH = 'yogaAction/REQUEST_BRANCH' as const;
// export const GET_BRANCH = 'yogaAction/GET_BRANCH' as const;

// export interface Yoga {
//     name: string,
//     description: string
// }

// export interface YogaList {
//     yogas: Yoga[]
// }

// interface requestListAction {
//     type: typeof REQUEST_LIST
// }

// interface requestBranchAction {
//     type: typeof REQUEST_BRANCH
//     meta: {
//         name: string
//     }
// }

const API_URL = 'http://127.0.0.1:8000'

export const requestList = (): ThunkAction<void, RootState, unknown, Action<string>> => 
    // async dispatch => {
    //     const asyncResp = await axios.get(`${API_URL}/yoga/`)
    //     dispatch(
    //         getList({
    //             yogas: asyncResp.data
    //         })
    //     )
    // }
    dispatch => {
        axios.get('http://127.0.0.1:8000/yoga')
            .then(response => {
                dispatch(getList(response.data));
            })
            .catch(error => console.log(error.response))
    }

export function getList(yogas: YogaList): YogaActionTypes {
    return {
        type: GET_LIST,
        payload: yogas
    }
}

export function requestBranch(name: string): YogaActionTypes {
    return {
        type: REQUEST_BRANCH,
        meta: {
            name
        }
    }
}
    
// export const getList = (list: YogaList) => {
//     return {
//         type: GET_LIST,
//         payload: list
//     }
// }

// export const requestList = () => ({
//     type: REQUEST_LIST,
//     payload: []
// });

// ReturnType: 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸
type YogaAction = 
    | ReturnType<typeof requestList>
    | ReturnType<typeof requestBranch>;

// export default YogaAction;

