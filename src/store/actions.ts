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
