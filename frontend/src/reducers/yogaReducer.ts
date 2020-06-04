import { Branch, YogaList, Video, VideoList, REQUEST_LIST, GET_LIST, REQUEST_BRANCH, GET_BRANCH, REQUEST_UPDATE, UPDATE_VIDEO, YogaActionTypes } from '../actions/types';

const yogaState: YogaList = {
    yogas: []
};



function yogaReducer(state = yogaState, action: YogaActionTypes): YogaList {
    switch(action.type) {
        case GET_LIST:
            return {
                yogas: [...state.yogas, ...action.payload.yogas]
            }
        default:
            return state;
    }
}  


export default yogaReducer;
