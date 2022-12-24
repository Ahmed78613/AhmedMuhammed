import React from "react";
import styles from "../sass/pages/projects.module.scss";

const Project = ({ title, image, viewOrCloseProject }) => {
	return (
		<div
			className={`${styles.item} rgb`}
			onClick={() => viewOrCloseProject("view", title)}
		>
			<img src={image} alt={`${title} app showcase`} />
			<h3>{title}</h3>
		</div>
	);
};

export default Project;
