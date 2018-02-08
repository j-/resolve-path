import * as React from 'react';

export interface Props {
	value: string;
	onChange: (value: string) => void;
}

const SegmentInput = (props: Props) => (
	<input
		type="text"
		value={props.value}
		onChange={(e) => props.onChange(e.currentTarget.value)}
	/>
);

export default SegmentInput;
