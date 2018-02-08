import { combineReducers } from 'redux';
import * as path from './reducer-path';
import * as focus from './reducer-focus';

export interface ReducerState {
	path: path.ReducerState;
	focus: focus.ReducerState;
}

export default combineReducers<ReducerState>({
	path: path.default,
	focus: focus.default,
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

export const getFocusIndex = (state: ReducerState): number => (
	focus.getFocusIndex(state.focus)
);
