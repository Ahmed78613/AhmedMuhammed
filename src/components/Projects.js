import React, { useState } from "react";
import styles from "../sass/pages/projects.module.scss";
import predictorApp from "../images/predictor-app.png";
import countriesApp from "../images/countries-app.png";
import quizApp from "../images/quiz-app.png";
import triviaApp from "../images/trivia-app.png";
import movieApp from "../images/tv-app.png";
import staticSites from "../images/static-sites.png";
import latestFirst from "../images/latest2.png";
import latestSecond from "../images/latest3.jpg";
import latestThird from "../images/latest1.png";

function Projects() {
	const [img, setImg] = useState("");
	const [slide, setSlide] = useState(0);

	const slideImages = [latestFirst, latestSecond, latestThird];

	function openImage(e) {
		const currentImg = e.target.src;
		setImg(currentImg);
	}

	function closeImage() {
		setImg("");
	}

	function updateSlideshow(dir) {
		setSlide((prevState) =>
			dir === "right" && prevState < slideImages.length - 1
				? prevState + 1
				: dir === "left" && prevState > 0
				? prevState - 1
				: prevState
		);
	}
	const imgDiv = <img src={img} alt="" />;

	const display = img === "" ? { display: "none" } : { display: "block" };

	return (
		<main className={styles.projects}>
			<h1>Projects</h1>
			<h2>Latest</h2>
			<div className={styles.latest}>
				<div className={styles.latestGallery}>
					<i
						className="fa-solid fa-circle-left"
						onClick={() => updateSlideshow("left")}
					/>
					<img src={slideImages[slide]} alt="" />
					<i
						className="fa-solid fa-circle-right"
						onClick={() => updateSlideshow("right")}
					/>
				</div>
				<div className={styles.latestDetails}>
					<h3>Risk Reverse</h3>
					<p>
						Risk register-based risk assessment/management methodology. All the
						risks can also be viewed on a single page and removed/modified
						there. The “Dashboard” and “View all” pages provide stats such as
						score, average probability, average impact, average risk level,
						total risks, high-level risks and a doughnut chart for
						visualization.
						<br />
						<br />
						<ul>
							<li>Add, Modify, Remove &#38; Prioritize risks</li>
							<li>Statistics &#38; Graphs</li>
							<li>No Sign up/in Required</li>
							<li>Dark Mode</li>
						</ul>
					</p>

					<a
						href="https://ahmed78613.github.io/risk-register-app/"
						target="blank"
					>
						Live
					</a>
					<a
						href="https://github.com/Ahmed78613/risk-register-app"
						target="blank"
					>
						Github
					</a>
				</div>
			</div>

			<h2>Other projects</h2>
			<section className={styles.grid}>
				<div className={styles.item}>
					<img src={predictorApp} alt="" onClick={openImage} />
					<h3>Predictator</h3>
				</div>
				<div className={styles.item}>
					<img src={triviaApp} alt="" onClick={openImage} />
					<h3>Trivia Night</h3>
				</div>
				<div className={styles.item}>
					<img src={countriesApp} alt="" onClick={openImage} />
					<h3>Rest Countries</h3>
				</div>
				<div className={styles.item}>
					<img src={quizApp} alt="" onClick={openImage} />
					<h3>Quizzical</h3>
				</div>
				<div className={styles.item}>
					<img src={movieApp} alt="" onClick={openImage} />
					<h3>Movie/TV DB</h3>
				</div>
				<div className={styles.item} onClick={openImage}>
					<img src={staticSites} alt="" onClick={openImage} />
					<h3>Static Sites</h3>
				</div>
			</section>

			<div className={styles.itemPopup} style={display} onClick={closeImage}>
				<span>&times;</span>
				{imgDiv}
			</div>
		</main>
	);
}

export default Projects;
