import React, { useState } from "react";
import styles from "../sass/components/modal.module.scss";

const Modal = ({
	title,
	images,
	description,
	solo,
	technologies,
	githubUrl,
	viewOrCloseProject,
}) => {
	const [currentImg, setCurrentImg] = useState(0);

	const changeSlide = (direction) => {
		setCurrentImg((prev) => {
			if (direction === "next") {
				if (images[currentImg + 1]) {
					return prev + 1;
				} else return 0;
			} else {
				if (images[currentImg - 1]) {
					return prev - 1;
				} else return images.length - 1;
			}
		});
	};

	return (
		<div className={styles.modal}>
			<div className={styles.modalContent}>
				<div className={styles.modalLeft}>
					<img src={images[currentImg]} alt="app homepage" />
					<i
						className={`fa-solid fa-circle-left ${styles.modalPrevSlide}`}
						onClick={() => changeSlide("prev")}
					/>
					<i
						className={`fa-solid fa-circle-right ${styles.modalNextSlide}`}
						onClick={() => changeSlide("next")}
					/>
				</div>
				<div className={styles.modalRight}>
					<i
						className={`fa-solid fa-circle-xmark ${styles.modalCloseBtn}`}
						onClick={() => viewOrCloseProject("close", "none")}
					/>
					<h1>{title}</h1>
					<h3 className={styles.modalDetails}>
						{solo ? "Solo" : "Team"} Project
					</h3>
					<p className={styles.modalDetails}>{description}</p>
					<h3 className={styles.modalDetails}>Technologies/Languages</h3>
					<div className={styles.technologies}>
						{technologies?.map((tech, i) => {
							return (
								<div className={styles.techItem} key={i}>
									{tech}
								</div>
							);
						})}
					</div>
					<a
						href={githubUrl}
						target="_blank"
						rel="noreferrer"
						className={styles.modalBtn}
					>
						Github
					</a>
				</div>
			</div>
		</div>
	);
};

export default Modal;
