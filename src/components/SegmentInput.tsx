import * as React from 'react';
import './SegmentInput.css';

export interface Props {
	value: string;
	autoFocus?: boolean;
	showRemoveButton: boolean;
	onChange: (value: string) => void;
	onFocus: () => void;
	onRemove: () => void;
}

export default class SegmentInput extends React.PureComponent<Props> {
	private input: HTMLInputElement;

	componentWillReceiveProps (newProps: Props) {
		if (newProps.autoFocus && !this.props.autoFocus) {
			this.input.focus();
		}
	}

	render () {
		const { value, autoFocus, showRemoveButton, onChange, onFocus, onRemove } = this.props;
		return (
			<div className="SegmentInput pt-input-group pt-large">
				<input
					className="SegmentInput-input pt-input pt-fill"
					type="text"
					value={value}
					autoFocus={autoFocus}
					onChange={(e) => onChange(e.currentTarget.value)}
					onFocus={onFocus}
					ref={(el) => this.input = el as HTMLInputElement}
				/>
				{showRemoveButton && <button
					className="pt-button pt-minimal pt-icon-large pt-icon-cross"
					onClick={onRemove}
				/>}
			</div>
		);
	}
}
