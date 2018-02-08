import * as React from 'react';
import './Resolved.css';

const copy = require('clipboard-copy');

export interface Props {
	resolved: string;
}

const Resolved = (props: Props) => (
	<div className="Resolved pt-input-group pt-large">
		<input
			className="Resolved-input pt-input pt-fill"
			type="text"
			readOnly={true}
			value={props.resolved}
		/>
		<button
			className="pt-button pt-minimal pt-intent-primary pt-icon-clipboard"
			onClick={() => copy(props.resolved)}
		/>
	</div>
);

export default Resolved;
