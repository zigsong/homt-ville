import { combineReducers } from 'redux';
import yogaReducer from '../reducers/yogaReducer';

const rootReducer = combineReducers({
    yogaReducer
});

export default rootReducer;

// 추후 컴포넌트에서 useSelector 이용 시 필요
export type RootState = ReturnType<typeof rootReducer>;