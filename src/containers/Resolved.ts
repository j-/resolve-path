import { connect } from 'react-redux';
import Resolved from '../components/Resolved';
import { ReducerState, getResolvedPath } from '../store';

const mapStateToProps = (state: ReducerState) => ({
	resolved: getResolvedPath(state),
});

export default connect(
	mapStateToProps,
)(Resolved);
