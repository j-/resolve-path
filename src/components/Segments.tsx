import * as React from 'react';
import SegmentInput from '../containers/SegmentInput';
import './Segments.css';

export interface Props {
	segmentCount: number;
	focusIndex: number;
	setFocus: (index: number) => void;
}

const Segments = (props: Props) => {
	const children = [];
	for (let i = 0; i < props.segmentCount + 1; i++) {
		children.push(
			<div className="Segments-item" key={i}>
				<SegmentInput index={i} autoFocus={i === props.focusIndex} />
			</div>
		);
	}
	const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
		switch (e.key) {
			case 'Enter':
				props.setFocus(props.focusIndex + 1);
				break;
			default:
		}
	};
	return (
		<div className="Segments" onKeyDown={keyDownHandler}>
			{children}
		</div>
	);
};

export default Segments;
