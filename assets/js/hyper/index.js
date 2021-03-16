import { h, app } from 'hyperapp';
import { actions } from './actions/actions.js';
import { globalState } from './state/globalState.js';
import App from './components/App.js';
import App1 from './components/Skill-page.js';

app({
	state: { globalState },
	view: (state, actions) => <App state={state} actions={actions} />,
	root: document.getElementById('app'),
	actions,
	events: {
		action(state, actions, { name, data }) {
			console.group('Action Info');
			console.log('Name:', name);
			console.log('Data:', data);
			console.groupEnd();
		},
		load(state, actions) {}
	}
});

app1({
	state: { globalState },
	view: (state, actions) => <App1 state={state} actions={actions} />,
	root: document.getElementById('app1'),
	actions,
	events: {
		action(state, actions, { name, data }) {
			console.group('Action Info');
			console.log('Name:', name);
			console.log('Data:', data);
			console.groupEnd();
		},
		load(state, actions) {}
	}
});
