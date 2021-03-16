import { h, app } from 'hyperapp';

export default function Skills({ state, actions }) {
	return (
		<section id="skills">
			<div class="container">
				<div class="title">
					<h1>My Skills</h1>
				</div>
				<div class="main-container">
					<div class="skillset-container">
						<div class="skill 1">
							<i class="fas fa-pen-fancy"></i>
							<h4>Web Design</h4>
							<p class="secondary-header">Html,Css and Javascript</p>
							<p>
								{' '}
								A website should be designed for the people who will use it, so
								that's exactly what I do. User focused design should be the
								primary goal of any website.
							</p>
						</div>
						<div class="skill 2">
							<i class="fas fa-desktop"></i>
							<h4>Web Development</h4>
							<p class="secondary-header">Responsive</p>
							<p>
								{' '}
								A website should be designed for the people who will use it, so
								that's exactly what I do. User focused design should be the
								primary goal of any website.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
