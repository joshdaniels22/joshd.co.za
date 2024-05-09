import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/cv";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import CV from "./pages/cv";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

import { redirect } from "react-router-dom";

// const loaderThing = async () => {
// 	const user = await getUser();
// 	if (!user) {
// 		;
// 	}
// 	return null;
// };

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				{/* <Route path="/cv" element={<CV />} /> */}
				{/* <Route path="/article/:slug" element={<ReadArticle />} /> */}
				<Route path="/contact" element={<Contact />} />
				{/* <Route path="/cv" element={<CV />} /> */}
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;


