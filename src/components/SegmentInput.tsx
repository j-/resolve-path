import * as React from 'react';
import './SegmentInput.css';

export interface Props {
	value: string;
	autoFocus?: boolean;
	onChange: (value: string) => void;
	onFocus: () => void;
}

export default class SegmentInput extends React.PureComponent<Props> {
	private input: HTMLInputElement;

	componentWillReceiveProps (newProps: Props) {
		if (newProps.autoFocus && !this.props.autoFocus) {
			this.input.focus();
		}
	}

	render () {
		const { value, autoFocus, onChange, onFocus } = this.props;
		return (
			<input
				className="SegmentInput pt-input pt-fill pt-large"
				type="text"
				value={value}
				autoFocus={autoFocus}
				onChange={(e) => onChange(e.currentTarget.value)}
				onFocus={onFocus}
				ref={(el) => this.input = el as HTMLInputElement}
			/>
		);
	}
}
