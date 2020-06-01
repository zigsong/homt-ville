import axios from 'axios';
import { Action } from 'redux';
import { RootState } from '../reducers/index'; 
import { ThunkAction } from 'redux-thunk';
import { Yoga, YogaList, VideoList, REQUEST_LIST, REQUEST_BRANCH, GET_LIST, YogaActionTypes, UPDATE_VIDEO } from './types';
    
export const requestVideos = (name: string): ThunkAction<void, RootState, unknown, Action<string>> => 
    dispatch => {
        axios.get(`http://127.0.0.1:8000/yoga/${name}/videos/get_youtube_data/`)
            .then(response => {
                dispatch(updateVideos(response.data));
            })
            .catch(error => console.log(error.response))
    }

export const updateVideos = (videos: VideoList): YogaActionTypes => {
    return {
        type: UPDATE_VIDEO,
        payload: videos
    };
}

type VideoAction = 
    | ReturnType<typeof requestVideos>
    | ReturnType<typeof updateVideos>


