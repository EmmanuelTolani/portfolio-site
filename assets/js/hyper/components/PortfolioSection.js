import { h, app } from 'hyperapp';

export default function PortfolioSection({ state, actions }) {
	return (
		<section id="portfolio-section">
			<div class="container">
				<div class="header-title">
					<h1>My Projects</h1>
				</div>
				<div class="portfolio-container">
					<a href="#" class="box image1">
						<div class="image">
							<div class="hover-bg">
								<div class="title">
									<div class="text">Ecommerce</div>
								</div>
							</div>
						</div>
					</a>
					<a href="#" class="box image2">
						<div class="image">
							<div class="hover-bg">
								<div class="title">
									<div class="text">Ecommerce</div>
								</div>
							</div>
						</div>
					</a>
					<a href="#" class="box image3">
						<div class="image">
							<div class="hover-bg">
								<div class="title">
									<div class="text">Ecommerce</div>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
