import * as React from 'react';
import './SegmentInput.css';

export interface Props {
	value: string;
	autoFocus?: boolean;
	onChange: (value: string) => void;
}

const SegmentInput = (props: Props) => (
	<input
		className="SegmentInput pt-input pt-fill"
		type="text"
		value={props.value}
		autoFocus={props.autoFocus}
		onChange={(e) => props.onChange(e.currentTarget.value)}
	/>
);

export default SegmentInput;
