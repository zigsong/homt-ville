import { Branch, YogaList, Video, VideoList, REQUEST_LIST, GET_LIST, REQUEST_BRANCH, GET_BRANCH, REQUEST_UPDATE, UPDATE_VIDEO, YogaActionTypes } from '../actions/types';

const yogaState: YogaList = {
    yogas: []
};

const branchState: Branch = {
    name: "",
    translation: "",
    description: "",
    images: [],
    videos: [],
}

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

function branchReducer(state = branchState, action: YogaActionTypes): Branch {
    switch(action.type) {
        case GET_BRANCH:
            return {
                // name: action.payload.name,
                // translation: action.payload.translation,
                // description: action.payload.description,
                // images: action.payload.images,
                // videos: action.payload.videos
                ...state,
                ...action.payload
            }
        default: 
            return state;
    }
}

export default yogaReducer;