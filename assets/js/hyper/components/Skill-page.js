import { h, app } from 'hyperapp';
import Header from './Header.js';
import Skills from './Skills.js';
import Footer from './Footer.js';
import Copyright from './Copyright.js';

export default function App1({ state, actions }) {
	return (
		<div class={'app1'}>
			<Header state={state} actions={actions} />
			<Skills state={state} actions={actions} />
			<Footer state={state} actions={actions} />
			<Copyright state={state} actions={actions} />
		</div>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
