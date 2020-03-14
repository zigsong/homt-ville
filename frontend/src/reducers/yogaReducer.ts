import { Yoga, YogaList, REQUEST_LIST, GET_LIST, REQUEST_BRANCH, GET_BRANCH, YogaActionTypes } from '../actions/types';
import { object } from 'prop-types';

const initialState: YogaList = {
    yogas: [],
};

export function yogaReducer(state = initialState, action: YogaActionTypes): YogaList {
    switch(action.type) {
        case GET_LIST:
            return {
                ...state,
                yogas: action.payload
            }
        // case REQUEST_BRANCH:
        //     return {
        //         ...state,
        //         payload: 
        //     };
        default:
            return state;
    }
}  

export default yogaReducer;