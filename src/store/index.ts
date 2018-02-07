import { combineReducers } from 'redux';
import * as path from './reducer-path';

export interface ReducerState {
	path: path.ReducerState;
}

export default combineReducers<ReducerState>({
	path: path.default,
});
