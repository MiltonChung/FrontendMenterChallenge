import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./styles/main.scss";
// https://app.shrtco.de/docs
function App() {
	return (
		<div className="app">
			<Nav />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
