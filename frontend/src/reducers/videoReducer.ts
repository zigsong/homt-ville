import { Branch, YogaList, Video, VideoList, REQUEST_LIST, GET_LIST, REQUEST_BRANCH, GET_BRANCH, REQUEST_UPDATE, UPDATE_VIDEO, VideoActionTypes } from '../actions/types';

const videoState: VideoList = {
    videos: [],
};

function videoReducer(state = videoState, action: VideoActionTypes): VideoList {
    switch(action.type) {
        case UPDATE_VIDEO:
            return {
                videos: [...state.videos, ...action.payload.videos]
            }
        default:
            return state;
    }
}  

export default videoReducer;