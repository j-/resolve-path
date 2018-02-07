import { Reducer } from 'redux';
import { posix } from 'path';
import { isActionAddSegment } from './actions';
const { resolve } = posix;

export interface ReducerState {
	segments: string[];
	resolved: string;
}

const DEFAULT_STATE: ReducerState = {
	segments: [],
	resolved: '',
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

	return state;
};

export default reducer;
