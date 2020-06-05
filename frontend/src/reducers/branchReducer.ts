import { Branch, YogaList, Video, VideoList, REQUEST_LIST, GET_LIST, REQUEST_BRANCH, GET_BRANCH, REQUEST_UPDATE, UPDATE_VIDEO, YogaActionTypes } from '../actions/types';

const branchState: Video[] = [];

function branchReducer(state = branchState, action: YogaActionTypes): Video[] {
    switch(action.type) {
        case GET_BRANCH:
            return {
                ...action.payload
            }
        default: 
            return state;
    }
}

export default branchReducer;
