import { Reducer } from 'redux';
import { resolve } from 'path';

import {
	isActionAddSegment,
	isActionSetSegment,
	isActionRemoveSegment,
	isActionReset,
} from './actions';

export interface ReducerState {
	segments: string[];
	resolved: string;
}

const DEFAULT_STATE: ReducerState = {
	segments: [],
	resolved: '/',
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionAddSegment(action)) {
		const segments = [...state.segments, action.data.segment];
		const resolved = resolve(...segments);
		return {
			...state,
			segments,
			resolved,
		};
	}

	if (isActionSetSegment(action)) {
		const segments = [...state.segments];
		segments[action.data.index] = action.data.segment;
		const resolved = resolve(...segments);
		return {
			...state,
			segments,
			resolved,
		};
	}

	if (isActionRemoveSegment(action)) {
		const segments = [...state.segments];
		segments.splice(action.data.index, 1);
		const resolved = resolve(...segments);
		return {
			...state,
			segments,
			resolved,
		};
	}

	if (isActionReset(action)) {
		return DEFAULT_STATE;
	}

	return state;
};

export default reducer;

export const getSegmentCount = (state: ReducerState): number => (
	state.segments.length
);

export const getSegmentAtIndex = (state: ReducerState, index: number): string => (
	state.segments[index]
);

export const getResolvedPath = (state: ReducerState): string => (
	state.resolved
);
