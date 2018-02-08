import { connect } from 'react-redux';
import Segments from '../components/Segments';
import { ReducerState, getSegmentCount } from '../store';

const mapStateToProps = (state: ReducerState) => ({
	segmentCount: getSegmentCount(state),
});

export default connect(
	mapStateToProps,
)(Segments);
