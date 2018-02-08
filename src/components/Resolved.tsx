import * as React from 'react';

export interface Props {
	resolved: string;
}

const Resolved = (props: Props) => (
	<div className="Resolved">
		{props.resolved}
	</div>
);

export default Resolved;
