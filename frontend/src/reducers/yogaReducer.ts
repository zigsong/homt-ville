import { Branch, YogaList, Video, VideoList, REQUEST_LIST, GET_LIST, REQUEST_BRANCH, GET_BRANCH, REQUEST_UPDATE, UPDATE_VIDEO, YogaActionTypes } from '../actions/types';

const yogaState: Branch[] = [];

function yogaReducer(state = yogaState, action: YogaActionTypes): Branch[] {
    switch(action.type) {
        case GET_LIST:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}  


export default yogaReducer;
