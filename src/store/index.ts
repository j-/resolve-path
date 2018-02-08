import { combineReducers } from 'redux';
import * as path from './reducer-path';

export interface ReducerState {
	path: path.ReducerState;
}

export default combineReducers<ReducerState>({
	path: path.default,
});

export const getSegmentCount = (state: ReducerState): number => (
	path.getSegmentCount(state.path)
);

export const getSegmentAtIndex = (state: ReducerState, index: number): string => (
	path.getSegmentAtIndex(state.path, index)
);

export const getResolvedPath = (state: ReducerState): string => (
	path.getResolvedPath(state.path)
);
