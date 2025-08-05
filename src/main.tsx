import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import ParfumProductCard from "./components/newbie/ParfumProductCard/ParfumProductCard.tsx";
import FourCardFeatureSections from "./components/newbie/FourCardFeature/FourCardFeatureSections.tsx";
import MeetingLandingPage from "./components/newbie/MeetLandingPage/MeetLandingPage.tsx";
import FaqAccordion from "./components/newbie/FaqAccordion/FaqAccordion.tsx";
import ProductListWithCart from "./components/junior/ProductListWithCart/ProductListWithCart.tsx";
import AgencyLandingPage from "./components/junior/AgencyLandingPage/AgencyLandingPage.tsx";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="perfume" element={<ParfumProductCard />} />
			<Route path="four" element={<FourCardFeatureSections />} />
			<Route path="meet" element={<MeetingLandingPage />} />
			<Route path="faq" element={<FaqAccordion />} />
			<Route path="productlistwithcart" element={<ProductListWithCart />} />
			<Route path="agency" element={<AgencyLandingPage />} />
		</Routes>
	</BrowserRouter>
);
