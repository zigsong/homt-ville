import axios from 'axios';
import { Action } from 'redux';
import { RootState } from '../reducers/index'; 
import { ThunkAction } from 'redux-thunk';
import { Yoga, YogaList, REQUEST_LIST, REQUEST_BRANCH, GET_LIST, YogaActionTypes } from './types';

// const API_URL = 'http://127.0.0.1:8000'

export const requestList = (): ThunkAction<void, RootState, unknown, Action<string>> => 
    dispatch => {
        axios.get('http://127.0.0.1:8000/yoga')
            .then(response => {
                dispatch(getList(response.data));
            })
            .catch(error => console.log(error.response))
    }

export const getList = (yogas: YogaList): YogaActionTypes => {
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

// ReturnType: 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸
type YogaAction = 
    | ReturnType<typeof requestList>
    | ReturnType<typeof requestBranch>;

// export default YogaAction;

