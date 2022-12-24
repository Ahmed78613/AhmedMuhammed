import React from "react";
import { Link } from "react-router-dom";
import styles from "../sass/pages/home.module.scss";
import galleryImg from "../assets/gallery.png";
import personalImg from "../assets/personal.png";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

function Home() {
	return (
		<Layout>
			<main className={styles.home}>
				<div className={styles.main}>
					<div className={styles.mainInner}>
						<div className={styles.mainLeft}>
							<motion.h1
								className={styles.code}
								animate={{
									rotate: [6, -6, 6, 0],
								}}
								transition={{ duration: 1.2 }}
							>
								Hi there! <br />
								I'm Ahmed.
							</motion.h1>
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

							<motion.p className={styles.code}>
								.me &#123; <br />
								&nbsp;&nbsp;&nbsp;I'm a frontend Developer. <br />
								&nbsp;&nbsp;&nbsp;Specializing in web development.
								<br />
								&nbsp;&nbsp;&nbsp;Based in London, England. <br />
								&#125;
							</motion.p>
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
		</Layout>
	);
}

export default Home;
