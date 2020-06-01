import { combineReducers } from 'redux';
import yogaReducer from '../reducers/yogaReducer';
import videoReducer from '../reducers/videoReducer';

const rootReducer = combineReducers({
    yogaReducer,
    videoReducer
});

export default rootReducer;

// 추후 컴포넌트에서 useSelector 이용 시 필요
export type RootState = ReturnType<typeof rootReducer>;