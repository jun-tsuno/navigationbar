import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Photos from "./components/Photos";
import Works from "./components/Works";
import SharedLayout from "./components/SharedLayout";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/Photos" element={<Photos />} />
					<Route path="/Works" element={<Works />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
