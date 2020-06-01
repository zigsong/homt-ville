import { Yoga, YogaList, VideoList, REQUEST_LIST, GET_LIST, REQUEST_BRANCH, GET_BRANCH, YogaActionTypes } from '../actions/types';

const yogaState: YogaList = {
    yogas: [],
};

function yogaReducer(state = yogaState, action: YogaActionTypes): YogaList {
    switch(action.type) {
        case GET_LIST:
            return {
                ...state,
                yogas: action.payload
            }
        default:
            return state;
    }
}  

export default yogaReducer;