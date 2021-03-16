import { h, app } from 'hyperapp';

export default function Blog({ state, actions }) {
	return (
		<section id="blog-section">
			<div class="container">
				<div class="title">
					<h1>Blog</h1>
				</div>
				<div class="main-container">
					<div class="blog-container">
						<div class="blog 1">
							<a href="https://etolani.blogspot.com/2021/02/5-best-practices-from-deep-work-by-cal.html">
								<div class="img"></div>
							</a>
							<div class="details">
								<a
									href="https://etolani.blogspot.com/2021/02/5-best-practices-from-deep-work-by-cal.html"
									class="header"
								>
									5 Best Practices from Deep Work by Cal Newport
								</a>
								<p class="subheading">
									<a
										class="category"
										href="https://etolani.blogspot.com/2021/02/5-best-practices-from-deep-work-by-cal.html"
									>
										Self development
									</a>
									<span>&nbsp;/ 25th January, 2021</span>
								</p>
								<p>Cal Newport might change your life.</p>
							</div>
						</div>
						<div class="blog 2">
							<a href="https://etolani.blogspot.com/2021/02/3-lessons-from-discipline-means-freedom.html">
								<div class="img-2"></div>
							</a>
							<div class="details">
								<a
									href="https://etolani.blogspot.com/2021/02/3-lessons-from-discipline-means-freedom.html"
									class="header"
								>
									3 Lessons From <em>Discipline Means Freedom</em>
								</a>
								<p class="subheading">
									<a
										class="category"
										href="https://etolani.blogspot.com/2021/02/3-lessons-from-discipline-means-freedom.html"
									>
										Self development
									</a>
									<span>&nbsp;/ 2nd Feburary, 2021 </span>
								</p>
								<p>
									Smarter Stronger Faster. Learn why discipline means freedom!
								</p>
							</div>
						</div>
					</div>
					<div class="button">
						<a href="https://etolani.blogspot.com">View more Posts</a>
					</div>
				</div>
			</div>
		</section>
	);
}
