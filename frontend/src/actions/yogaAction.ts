import axios from 'axios';
import { Action } from 'redux';
import { RootState } from '../reducers/index'; 
import { ThunkAction } from 'redux-thunk';
import { Branch, YogaList, Video, VideoList, REQUEST_LIST, GET_LIST, REQUEST_BRANCH, GET_BRANCH, REQUEST_UPDATE, UPDATE_VIDEO, YogaActionTypes } from './types';

const API_URL = 'http://127.0.0.1:8000'

export const requestList = (): ThunkAction<void, RootState, unknown, Action<string>> => 
    dispatch => {
        axios.get(`${API_URL}/yoga`)
            .then(response => {
                dispatch(getList(response.data));
            })
            .catch(error => console.log(error.response))
    }

export const getList = (yogaList: Branch[]): YogaActionTypes => {
    return {
        type: GET_LIST,
        payload: yogaList
    }
}

export const requestBranch = (branch: string): ThunkAction<void, RootState, unknown, Action<string>> => 
    dispatch => {
        axios.get(`${API_URL}/yoga/${branch}/videos`)
            .then(response => {
                dispatch(getBranch(response.data));
                console.log(response.data);
            })
            .catch(error => console.log(error.response))
    }

export const getBranch = (videoList: Video[]): YogaActionTypes => {
    return {
        type: GET_BRANCH,
        payload: videoList
    }               
}


// type YogaAction = 
//     | ReturnType<typeof requestList>
//     | ReturnType<typeof requestBranch>;

// export default YogaAction;

