import * as React from 'react';
import SegmentInput from '../containers/SegmentInput';

export interface Props {
	segmentCount: number;
}

const Segments = (props: Props) => {
	const children = [];
	for (let i = 0; i < props.segmentCount + 1; i++) {
		children.push(
			<div className="Segments-item" key={i}>
				<SegmentInput index={i} />
			</div>
		);
	}
	return (
		<div className="Segments">
			{children}
		</div>
	);
};

export default Segments;
