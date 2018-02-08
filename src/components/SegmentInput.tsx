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
		const { value, autoFocus, showRemoveButton } = this.props;
		return (
			<div className="SegmentInput pt-input-group pt-large">
				<input
					className="SegmentInput-input pt-input pt-fill"
					type="text"
					value={value}
					autoFocus={autoFocus}
					onChange={this.handleInputChange}
					onFocus={this.handleInputFocus}
					ref={this.setInputRef}
				/>
				{showRemoveButton && <button
					className="pt-button pt-minimal pt-icon-cross"
					onClick={this.handleButtonClick}
				/>}
			</div>
		);
	}

	private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.props.onChange(e.currentTarget.value);
	}

	private handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		this.props.onFocus();
	}

	private handleButtonClick = (e: React.MouseEvent<HTMLInputElement>) => {
		e.preventDefault();
		e.stopPropagation();
		this.props.onRemove();
	}

	private setInputRef = (el: HTMLInputElement) => {
		this.input = el;
	}
}
