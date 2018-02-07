import reducer from './reducer-path';
import { addSegment, setSegment, reset } from './actions';

it('can add a single segment', () => {
	const state = {
		segments: [],
		resolved: '',
	};
	const action = addSegment('/foo');
	const result = reducer(state, action);
	expect(result).toHaveProperty('segments');
	expect(result.segments).toEqual(['/foo']);
	expect(result).toHaveProperty('resolved', '/foo');
});

it('can resolve multiple segments', () => {
	const state = {
		segments: ['/foo', 'bar', 'qux'],
		resolved: '/foo/bar/qux',
	};
	const action = addSegment('../baz');
	const result = reducer(state, action);
	expect(result.segments).toEqual(['/foo', 'bar', 'qux', '../baz']);
	expect(result.resolved).toBe('/foo/bar/baz');
});

it('can reset', () => {
	const state = {
		segments: ['/foo', 'bar', 'qux', '../baz'],
		resolved: '/foo/bar/baz',
	};
	const action = reset();
	const result = reducer(state, action);
	expect(result.segments).toEqual([]);
	expect(result.resolved).toBe('');
});

it('can update a segment', () => {
	const state = {
		segments: ['/foo', 'bar', 'qux', '../baz'],
		resolved: '/foo/bar/baz',
	};
	const action = setSegment(3, '../../bar');
	const result = reducer(state, action);
	expect(result.segments).toEqual(['/foo', 'bar', 'qux', '../../bar']);
	expect(result.resolved).toBe('/foo/bar');
});
