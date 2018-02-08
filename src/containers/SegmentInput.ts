import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import SegmentInput from '../components/SegmentInput';
import { ReducerState, getSegmentAtIndex, getSegmentCount } from '../store';
import { setSegment, setFocus, removeSegment } from '../store/actions';

interface StateProps {
	value: string;
	showRemoveButton: boolean;
}

interface DispatchProps {
	onChange: (value: string) => void;
	onFocus: () => void;
	onRemove: () => void;
}

interface OwnProps {
	index: number;
}

const mapStateToProps = (state: ReducerState, props: OwnProps): StateProps => ({
	value: getSegmentAtIndex(state, props.index) || '',
	showRemoveButton: getSegmentCount(state) > 0 && props.index < getSegmentCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, props: OwnProps): DispatchProps => ({
	onChange: (value: string) => dispatch(setSegment(props.index, value)),
	onFocus: () => dispatch(setFocus(props.index)),
	onRemove: () => dispatch(removeSegment(props.index)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SegmentInput);
