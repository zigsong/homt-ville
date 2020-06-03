import axios from 'axios';
import { Action } from 'redux';
import { RootState } from '../reducers/index'; 
import { ThunkAction } from 'redux-thunk';
import { Branch, YogaList, Video, VideoList, REQUEST_LIST, GET_LIST, REQUEST_BRANCH, GET_BRANCH, REQUEST_UPDATE, UPDATE_VIDEO, VideoActionTypes } from './types';
    
const API_URL = 'http://127.0.0.1:8000'

export const requestUpdate = (branch: string): ThunkAction<void, RootState, unknown, VideoActionTypes> => 
    dispatch => {
        axios.post(`${API_URL}/yoga/${branch}/videos`)
            .then(response => {
                dispatch(updateVideos(response.data));
            })
            .catch(error => console.log(error.response))
    }

export const updateVideos = (videoList: VideoList): VideoActionTypes => {
    return {
        type: UPDATE_VIDEO,
        payload: videoList
    }
}


type VideoAction = 
    | ReturnType<typeof requestUpdate>
    | ReturnType<typeof updateVideos>


