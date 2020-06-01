export const REQUEST_LIST = 'yogaAction/REQUEST_LIST' as const; // as const 생략?
export const GET_LIST = 'yogaAction/GET_LIST' as const; 
export const REQUEST_BRANCH = 'yogaAction/REQUEST_BRANCH' as const;
export const GET_BRANCH = 'yogaAction/GET_BRANCH' as const;
export const UPDATE_VIDEO = 'yogaAction/UPDATE_VIDEO';

export interface Yoga {
    // id: number,
    name: string,
    description: string,
    // images: object,
    images: [],
    videos: [],
}

export interface YogaList {
    // yogas: []
    yogas: any
}

export interface VideoList {
    videos: []
}

interface RequestListAction {
    type: typeof REQUEST_LIST
    // payload: YogaList
}

interface GetListAction {
    type: typeof GET_LIST
    payload: YogaList
}

interface RequestBranchAction {
    type: typeof REQUEST_BRANCH
    meta: {
        name: string
    }
}

interface UpdateVideosAction {
    type: typeof UPDATE_VIDEO
    // payload: Yoga["videos"]
    payload: VideoList
}

export type YogaActionTypes = 
    RequestListAction
    | GetListAction
    | RequestBranchAction
    | UpdateVideosAction
    