import React, { useState } from "react";
import styles from "../sass/pages/projects.module.scss";
import latestFirst from "../assets/Risk-Register/latest2.png";
import latestSecond from "../assets/Risk-Register/latest3.jpg";
import latestThird from "../assets/Risk-Register/latest1.png";
import Project from "../components/Project";
import projectsData from "../data";
import Modal from "../components/Modal";
import Layout from "../components/Layout";
import TypewriterComponent from "typewriter-effect";

function Projects() {
	const [slide, setSlide] = useState(0);
	const [viewProjectModal, setViewProjectModal] = useState("");
	const slideImages = [latestFirst, latestSecond, latestThird];

	function updateSlideshow(dir) {
		setSlide((prevState) =>
			dir === "right" && prevState < slideImages.length - 1
				? prevState + 1
				: dir === "left" && prevState > 0
				? prevState - 1
				: prevState
		);
	}

	const viewOrCloseProject = (action, project) => {
		if (action === "view") {
			const data = projectsData.filter((item) => item.title === project)[0];

			setViewProjectModal(data);
		} else setViewProjectModal("");
	};

	return (
		<Layout>
			<main className={styles.projects}>
				<h1>
					<TypewriterComponent
						options={{
							strings: ["My Projects"],
							autoStart: true,
							pauseFor: 10000000000,
						}}
					/>
				</h1>
				<h2>Featured</h2>
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
							Risk register-based risk assessment/management methodology. All
							the risks can also be viewed on a single page and removed/modified
							there. The “Dashboard” and “View all” pages provide stats such as
							score, average probability, average impact, average risk level,
							total risks, high-level risks and a doughnut chart for
							visualization.
							<br />
							<br />
						</p>
						<ul>
							<li>Add, Modify, Remove &#38; Prioritize risks</li>
							<li>Statistics &#38; Graphs</li>
							<li>No Sign up/in Required</li>
							<li>Dark Mode</li>
						</ul>

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
				<h2>All Projects</h2>
				<section className={styles.grid}>
					{projectsData?.map((project, i) => (
						<Project
							key={i}
							title={project.title}
							image={project.images[0]}
							description={project.description}
							solo={project.solo}
							technologies={project.technologies}
							githubUrl={project.githubUrl}
							viewOrCloseProject={viewOrCloseProject}
						/>
					))}
				</section>
				{viewProjectModal && (
					<Modal
						title={viewProjectModal.title}
						images={viewProjectModal.images}
						description={viewProjectModal.description}
						solo={viewProjectModal.solo}
						technologies={viewProjectModal.technologies}
						githubUrl={viewProjectModal.githubUrl}
						viewOrCloseProject={viewOrCloseProject}
					/>
				)}
			</main>
		</Layout>
	);
}

export default Projects;
