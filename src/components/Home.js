import React from "react";
import { Link } from "react-router-dom";
import styles from "../sass/pages/home.module.scss";
import galleryImg from "../images/gallery.png";
import personalImg from "../images/personal.png";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

function Home() {
	return (
		<main className={styles.home}>
			<div className={styles.main}>
				<div className={styles.mainInner}>
					<div className={styles.mainLeft}>
						<h1>
							Hi there! <br />
							I'm Ahmed.
						</h1>
						<Link to="/projects">See my Work</Link>
					</div>
					<div className={styles.mainRight}>
						<img
							src={personalImg}
							alt="Self portrait"
							className={styles.myPhoto}
						/>
						<div className={styles.gallery}>
							<img src={galleryImg} alt="gallery showcasing skills" />
						</div>

						<p className={styles.code}>
							.me &#123; <br />
							&nbsp;&nbsp;&nbsp;I'm a frontend Developer. <br />
							&nbsp;&nbsp;&nbsp;Specializing in web development.
							<br />
							&nbsp;&nbsp;&nbsp;Based in London, England. <br />
							&#125;
						</p>
					</div>
				</div>
			</div>
			<div>
				<About />
				<Projects />
				<Experience />
				<Contact />
			</div>
		</main>
	);
}

export default Home;
