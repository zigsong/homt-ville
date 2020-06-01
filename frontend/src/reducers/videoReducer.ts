import { Yoga, YogaList, VideoList, REQUEST_LIST, GET_LIST, REQUEST_BRANCH, UPDATE_VIDEO, GET_BRANCH, YogaActionTypes } from '../actions/types';

const videoState: VideoList = {
    videos: [],
};

function videoReducer(state = videoState, action: YogaActionTypes): VideoList {
    switch(action.type) {
        case UPDATE_VIDEO:
            return {
                ...state, 
                videos: action.payload.videos
            }
        default:
            return state;
    }
}  

export default videoReducer;