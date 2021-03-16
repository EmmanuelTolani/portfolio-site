import { h, app } from 'hyperapp';

export default function Top({ state, actions }) {
	return (
		<section id="top">
			<div class="container">
				<div class="top-container">
					<div class="info">
						<h1>Hey, I'm Emmanuel.</h1>
						<p>
							A web designer and developer from Edmonton, Alberta Canada. I am
							passionate about development.
						</p>
						<div class="button">
							<a href="#portfolio-section">Latest Works</a>
						</div>
					</div>
					<div class="img">
						<div class="background-img"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
