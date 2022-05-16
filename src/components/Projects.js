import React, { useState } from "react";
import styles from "../sass/pages/projects.module.scss";
import predictorApp from "../images/predictor-app.png";
import countriesApp from "../images/countries-app.png";
import quizApp from "../images/quiz-app.png";
import triviaApp from "../images/trivia-app.png";
import movieApp from "../images/tv-app.png";
import staticSites from "../images/static-sites.png";

function Projects() {
	const [img, setImg] = useState("");

	function openImage(e) {
		const img = e.target.src;
		setImg(img);
	}

	function closeImage() {
		setImg("");
	}

	const imgDiv = <img src={img} alt="" />;

	const display = img === "" ? { display: "none" } : { display: "block" };

	return (
		<main className={styles.projects}>
			<h1>PROJECTS</h1>
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
