import { h, app } from 'hyperapp';

export default function Header({ state, actions }) {
	return (
		<header>
			<div class="logo">
				<a href="#" class="name">
					Tolani
				</a>
			</div>
			<div class="header-menu">
				<a href="index.html#portfolio-section">Projects</a>
				<a href="index.html#skills">Skills</a>
				<a href="index.html#blog-section">Blog</a>
				<a href="index.html#skills">Contact</a>
			</div>
			<div class="menu-btn">
				<i class="fas fa-bars"></i>
			</div>
		</header>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
