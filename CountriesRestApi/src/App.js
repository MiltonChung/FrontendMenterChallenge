import NavBar from "./components/Navbar.js";
import Filter from "./components/Filter.js";
import Main from "./components/Main.js";
import DetailedPage from "./components/DetailedPage.js";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/" component={Main} exact />
				<Route path="/:country" component={DetailedPage} />
			</Switch>
		</div>
	);
}

export default App;

// https://restcountries.eu/
// https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub/rest-countries-api-with-color-theme-switcher-JB_uK8bSN