import React from 'react';
import ReactDOM from 'react-dom';
import Info from './components/Info';
import Projects from './components/Projects';

//needed for material ui...will not be needed in later release
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let container = {
	margin: '0',
	height: '210px',
	width: '100%',
	backgroundColor: '#003366'
}

ReactDOM.render(
	<div style={container}>
		<Info/>
		<Projects/>
	</div>,
	document.getElementById('app')
);
