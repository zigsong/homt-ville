export const REQUEST_LIST = 'yogaAction/REQUEST_LIST' as const; // as const 생략?
export const GET_LIST = 'yogaAction/GET_LIST' as const; 
export const REQUEST_BRANCH = 'yogaAction/REQUEST_BRANCH' as const;
export const GET_BRANCH = 'yogaAction/GET_BRANCH' as const;

export interface Yoga {
    id: number,
    name: string,
    description: string,
    images: object
}

export interface YogaList {
    // yogas: object
    // yogas: Yoga[];
    // yogas: Array<Yoga>
    // yogas: Array<object>
    yogas: any
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

export type YogaActionTypes = 
    RequestListAction
    | GetListAction
    | RequestBranchAction
    