import React from "react";
import { Link } from "react-router-dom";
import styles from "../sass/components/navbar.module.scss";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link to="/about">About</Link>
			<Link to="/experience">Experience</Link>
			<Link to="/AhmedMuhammed">
				<i className="fa-solid fa-house"></i>
			</Link>
			<Link to="/projects">Projects</Link>
			<Link to="/contact">Contact</Link>
		</nav>
	);
}

export default Navbar;
