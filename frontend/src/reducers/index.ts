import { combineReducers } from 'redux';
import yogaReducer from '../reducers/yogaReducer';
import videoReducer from '../reducers/videoReducer';

const rootReducer = combineReducers({
    yogaReducer,
    videoReducer
});

export default rootReducer;

//컴포넌 트에서 useSelector 이용 시 사용
export type RootState = ReturnType<typeof rootReducer>;