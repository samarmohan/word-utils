import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CapitalizeRandomLetters } from "./components/CapitalizeRandomLetters";
import { Home } from "./components/Home";
import { Navbar } from "./components/ui/Navbar";
import { ReverseSentence } from "./components/ReverseSentence";
import { ReverseWords } from "./components/ReverseWords";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex justify-center flex-col items-center">
        <Route exact path="/" component={Home} />
        <div className="flex flex-col items-center h-screen">
          <Switch>
            <Route exact path="/reverse/sentence" component={ReverseSentence} />
            <Route exact path="/reverse/words" component={ReverseWords} />
            <Route
              exact
              path="/capitalize-random-letters"
              component={CapitalizeRandomLetters}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
