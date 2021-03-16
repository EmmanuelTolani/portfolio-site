import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<section id="footer">
			<div class="container">
				<div class="footer-container">
					<div class="info">
						<div class="title">
							<h2>Let's Work Together</h2>
							<p>Have a project you'd like to discuss?</p>
						</div>
						<div class="button">
							<a href="mailto: %65%6D%6D%61%6E%75%65%6C%74%6F%6C%61%6E%69%31%37%40%67%6D%61%69%6C%2E%63%6F%6D">
								Contact me
							</a>
						</div>
					</div>
					<div class="social-container">
						<a href="https://www.linkedin.com/in/emmanuel-tolani-0b5a9b188/">
							<i class="fab fa-linkedin"></i>
							<span> on linkedin</span>
						</a>
						<a href="https://dribbble.com/tolanie">
							<i class="fab fa-dribbble"></i>
							<span> on dribbble</span>
						</a>
						<a href="https://github.com/EmmanuelTolani">
							<i class="fab fa-github"></i>
							<span> on github</span>
						</a>
						<a href="https://www.instagram.com/etolanii/">
							<i class="fab fa-instagram"></i>
							<span> on instagram</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
