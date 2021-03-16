import { h, app } from 'hyperapp';
import Header from './Header.js';
import Top from './Top.js';
import PortfolioSection from './PortfolioSection.js';
import Skills from './Skills.js';
import Blog from './Blog.js';
import Footer from './Footer.js';
import Copyright from './Copyright.js';

export default function App({ state, actions }) {
	return (
		<div class={'app'}>
			<Header state={state} actions={actions} />
			<Top state={state} actions={actions} />
			<PortfolioSection state={state} actions={actions} />
			<Skills state={state} actions={actions} />
			<Blog state={state} actions={actions} />
			<Footer state={state} actions={actions} />
			<Copyright state={state} actions={actions} />
		</div>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
