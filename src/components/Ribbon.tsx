import * as React from 'react';

const imageSrc = 'https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67';  // tslint:disable-line
const Ribbon = () => (
	<a href="https://github.com/j-/resolve-path">
		<img
			style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
			src={imageSrc}
			alt="Fork me on GitHub"
			data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
		/>
	</a>
);

export default Ribbon;