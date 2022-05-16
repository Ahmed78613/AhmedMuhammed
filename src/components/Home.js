import React from "react";
import { Link } from "react-router-dom";
import styles from "../sass/pages/home.module.scss";
import topBackground from "../images/top-bg.svg";
import bottomBackground from "../images/bottom-bg.svg";
import intro from "../images/intro.png";
import graphic from "../images/graphic.svg";
function Home() {
	return (
		<>
			<main className={styles.home}>
				{/*background shapes*/}
				<img className={styles.bgTop} src={topBackground} alt="" />
				<img className={styles.bgBottom} src={bottomBackground} alt="" />
				<img className={styles.bgIntro} src={intro} alt="" />
				<div className={styles.contact}>
					<img src={graphic} alt="" />
					<Link to="/contact">Contact me</Link>
				</div>
			</main>
		</>
	);
}

export default Home;

/* 
<div className={styles.intro}>
		<h2 className={styles.line1}>Hello, I'm</h2>
		<h1 className={styles.line2}>Ahmed Muhammed</h1>
		<h3 className={styles.line3}>Frontend Developer</h3>
</div> 
*/
