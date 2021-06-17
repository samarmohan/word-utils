import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CapitalizeRandomLetters } from "./components/CapitalizeRandomLetters";
import { Home } from "./components/Home";
import { ReverseSentence } from "./components/ReverseSentence";
import { ReverseWords } from "./components/ReverseWords";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Link to="/reverse/sentence/">Reverse Sentence</Link> <br />
				<Link to="/reverse/words/">Reverse Words</Link> <br />
				<Link to="/capitalize-random-letters/">
					Capitalize Random Letters
				</Link>{" "}
				<br />
				<Link to="/">Home</Link> <br />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/reverse/sentence" component={ReverseSentence} />
					<Route exact path="/reverse/words" component={ReverseWords} />
					<Route
						exact
						path="/capitalize-random-letters"
						component={CapitalizeRandomLetters}
					/>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
