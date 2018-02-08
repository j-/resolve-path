import { connect } from 'react-redux';
import Segments from '../components/Segments';
import { ReducerState, getSegmentCount, getFocusIndex } from '../store';
import { setFocus } from '../store/actions';

const mapStateToProps = (state: ReducerState) => ({
	segmentCount: getSegmentCount(state),
	focusIndex: getFocusIndex(state),
});

const mapDispatchToProps = ({
	setFocus,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Segments);
