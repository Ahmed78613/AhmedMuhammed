import React from "react";
import styles from "../sass/pages/contact.module.scss";

function Contact() {
	return (
		<main className={styles.contact}>
			<h1>Contact Page</h1>
			<p>
				If you would like to contact me please fill in the form below and I will
				get back to you as soon as I possibly can. You can also reach me on my
				LinkedIn or github.
			</p>
			<form
				action="https://formsubmit.co/a91fdbb25681a4f6a5934e8a93a4251c"
				method="POST"
			>
				<input type="text" name="name" placeholder="Name" required />
				<input type="email" name="email" placeholder="Email" required />
				<input type="text" name="subject" placeholder="Subject" required />
				<textarea name="description" placeholder="Description" required />
				<input type="submit" />
			</form>
			<hr />
			<section className={styles.socials}>
				<a
					href="https://github.com/Ahmed78613"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fab fa-github"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/ahmed-muhammed-/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fab fa-linkedin"></i>
				</a>
			</section>
		</main>
	);
}

export default Contact;
