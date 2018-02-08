import * as React from 'react';
import Ribbon from './Ribbon';
import Segments from '../containers/Segments';
import Resolved from '../containers/Resolved';
import './App.css';

const App = () => (
	<div className="App">
		<h1>Resolve path</h1>
		<Ribbon />

		<br />

		<h2>Path segments</h2>
		<Segments />

		<br />

		<h2>Resolved path</h2>
		<Resolved />
	</div>
);

export default App;
