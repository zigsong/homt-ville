export const REQUEST_LIST = 'yogaAction/REQUEST_LIST'
export const GET_LIST = 'yogaAction/GET_LIST'
export const REQUEST_BRANCH = 'yogaAction/REQUEST_BRANCH'
export const GET_BRANCH = 'yogaAction/GET_BRANCH'
export const REQUEST_UPDATE = 'yogaAction/REQUEST_UPDATE'
export const UPDATE_VIDEO = 'yogaAction/UPDATE_VIDEO'

export interface Branch {
    name: string,
    translation: string,
    description: string,
    images: any[],
    videos: any[]
}

export interface YogaList {
    yogas: Branch[]
}

export interface Video {
    id: number,
    videoId: string,
    level: number,
    runtime: number    
    branch: string,
}

export interface VideoList {
    videos: Video[]
}

interface RequestListAction {
    type: typeof REQUEST_LIST
}

interface GetListAction {
    type: typeof GET_LIST
    payload: YogaList
}

interface RequestBranchAction {
    type: typeof REQUEST_BRANCH
    branch: string
}

interface GetBranchAction {
    type: typeof GET_BRANCH
    payload: Branch
}

interface RequestUpdateAction {
    type: typeof REQUEST_UPDATE
    branch: string
}
interface UpdateVideosAction {
    type: typeof UPDATE_VIDEO
    payload: VideoList
}

export type YogaActionTypes = 
    RequestListAction
    | GetListAction
    | RequestBranchAction
    | GetBranchAction

export type VideoActionTypes =
    | RequestUpdateAction
    | UpdateVideosAction