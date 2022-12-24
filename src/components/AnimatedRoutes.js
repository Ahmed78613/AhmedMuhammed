import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import About from "../pages/About";
import Projects from "../pages/Projects";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence
			mode="wait"
			initial={false}
			onExitComplete={() => window.scrollTo(0, 0)}
		>
			<Routes location={location} key={location.pathname}>
				<Route index element={<Home />} />
				<Route path="Contact" element={<Contact />} />
				<Route path="Experience" element={<Experience />} />
				<Route path="About" element={<About />} />
				<Route path="Projects" element={<Projects />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
