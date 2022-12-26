import "./sass/app.scss";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { motion } from "framer-motion";

function App() {
	return (
		<>
			<Navbar />
			<Socials />
			<AnimatedRoutes />
		</>
	);
}

export default App;
