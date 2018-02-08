import { Reducer } from 'redux';
import { isActionSetFocus, isActionReset, isActionSetSegment } from './actions';

export interface ReducerState {
	index: number;
}

const DEFAULT_STATE: ReducerState = {
	index: 0,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetFocus(action) || isActionSetSegment(action)) {
		return {
			...state,
			index: action.data.index,
		};
	}

	if (isActionReset(action)) {
		return DEFAULT_STATE;
	}

	return state;
};

export default reducer;

export const getFocusIndex = (state: ReducerState): number => (
	state.index
);
