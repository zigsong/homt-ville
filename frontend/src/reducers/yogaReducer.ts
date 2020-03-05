import { Yoga, YogaList, REQUEST_LIST, GET_LIST, REQUEST_BRANCH, GET_BRANCH, YogaActionTypes } from '../actions/types';
import { object } from 'prop-types';

// type YogaList = {
//     name: string,
//     description: string
// }

// export interface YogaListState {
//     // yogaList: YogaList[];
//     yogaList: []
// };

const initialState: YogaList = {
    yogas: [], // type을 정의하는 게 아니라 값을 정의하는 것임
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