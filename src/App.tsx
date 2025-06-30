import { Link } from "react-router";
import "./App.css";

function App() {
	return (
		<>
			<h1>Components</h1>
			<div>click the link to see project</div>
			<div>
				<ol>
					<li>
						<Link to="/four">Four cards</Link>
					</li>
					<li>
						<Link to="/perfume">Perfume card</Link>
					</li>
					<li>
						<Link to="/meet">Meet Landing Page</Link>
					</li>
					<li>
						<Link to="/faq">FAQ</Link>
					</li>
					<li>
						<Link to="/productlistwithcart">Dessert List with Cart</Link>
					</li>
				</ol>
			</div>
		</>
	);
}

export default App;
