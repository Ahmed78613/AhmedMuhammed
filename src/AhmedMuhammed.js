import "./sass/app.scss";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { motion } from "framer-motion";

function App() {
	return (
		<>
			<motion.div animate={{ x: [0, 1000, 0] }}>
				<Navbar />
			</motion.div>

			<Socials />
			<AnimatedRoutes />
		</>
	);
}

export default App;
