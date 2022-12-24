import React from "react";
import styles from "../sass/pages/about.module.scss";
import Layout from "../components/Layout";
import TypewriterComponent from "typewriter-effect";

function About() {
	return (
		<Layout>
			<main className={styles.about}>
				<h1>
					<TypewriterComponent
						options={{
							strings: ["About me..."],
							autoStart: true,
							pauseFor: 10000000000,
						}}
					/>
				</h1>
				<div className={styles.details}>
					<h2>I am...</h2>
					<p>
						Ambitious, hardworking and a great team player. I look forward to
						any challenges that I am given. I enjoy working in a team and
						individually, despite any obstacles that I may face. I am an
						organised individual who looks forward to learning new skills and
						growing as a person. I get along well with others and do not
						hesitate to ask any questions about something I don't understand. My
						career ambition has always been to become a web developer, as this
						is what I enjoy doing most. From requirement gathering, and design
						to the development stage.
					</p>
					<br />
					<h2>BSc Graduate with First Class Honours</h2>
					<p>
						I am a BSc Computing for Business graduate from the University of
						East London. Due to my recent graduation, I am eager to secure an
						exciting role in front-end web development. In the second year of my
						degree, I undertook a 2-month placement as a WordPress web
						developer. I was delighted to be presented with the opportunity to
						utilise the skills I gained during my studies in college and
						university to bring a client's vision to life. From gathering the
						clients' requirements to translating them into a dynamic and unique
						website with the help of my team. I am eager to hear about potential
						career opportunities, so I would be pleased to chat about job
						openings in the front-end web development sphere.
					</p>
				</div>
			</main>
		</Layout>
	);
}

export default About;
