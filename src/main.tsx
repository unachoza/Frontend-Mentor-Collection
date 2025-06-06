import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import ParfumProductCard from "./components/newbie/ParfumProductCard/ParfumProductCard.tsx";
import FourCardFeatureSections from "./components/newbie/FourCardFeature/FourCardFeatureSections.tsx";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="perfume" element={<ParfumProductCard />} />
			<Route path="four" element={<FourCardFeatureSections />} />
		</Routes>
	</BrowserRouter>
);
