import { Action } from 'redux';

export interface ActionAddSegment extends Action {
	type: 'AddSegment';
	data: {
		segment: string;
	};
}

export const isActionAddSegment = (action: Action): action is ActionAddSegment => (
	action.type === 'AddSegment'
);

export const addSegment = (segment: string): ActionAddSegment => ({
	type: 'AddSegment',
	data: {
		segment,
	},
});

export interface ActionReset extends Action {
	type: 'Reset';
}

export const isActionReset = (action: Action): action is ActionReset => (
	action.type === 'Reset'
);

export const reset = (): ActionReset => ({
	type: 'Reset',
});
