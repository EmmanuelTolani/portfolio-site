import { h, app } from 'hyperapp';

export default function Copyright({ state, actions }) {
	return (
		<section id="copyright-section">
			<div class="copyright">
				<h5>&#169; 2021 Emmanuel Tolani. All rights reserved.</h5>
			</div>
		</section>
	);
}
