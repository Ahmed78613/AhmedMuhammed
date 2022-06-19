import "./sass/app.scss";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Socials from "./components/Socials";

function App() {
	return (
		<>
			<Navbar />
			<Socials />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/AhmedMuhammed" element={<Home />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
