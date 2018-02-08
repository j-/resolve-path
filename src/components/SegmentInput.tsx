import * as React from 'react';
import './SegmentInput.css';

export interface Props {
	value: string;
	onChange: (value: string) => void;
}

const SegmentInput = (props: Props) => (
	<input
		className="SegmentInput pt-input pt-fill"
		type="text"
		value={props.value}
		onChange={(e) => props.onChange(e.currentTarget.value)}
	/>
);

export default SegmentInput;
