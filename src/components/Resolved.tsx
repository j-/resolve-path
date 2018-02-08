import * as React from 'react';
import './Resolved.css';

export interface Props {
	resolved: string;
}

const Resolved = (props: Props) => (
	<div className="Resolved">
		<input
			className="pt-input pt-fill Resolved-input"
			type="text"
			readOnly={true}
			value={props.resolved}
		/>
	</div>
);

export default Resolved;
