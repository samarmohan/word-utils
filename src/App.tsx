import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CapitalizeRandomLetters } from "./pages/CapitalizeRandomLetters";
import { Home } from "./pages/Home";
import { Navbar } from "./ui/Navbar";
import { ReverseSentence } from "./pages/ReverseSentence";
import { ReverseWords } from "./pages/ReverseWords";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex justify-center flex-col items-center">
        <Route exact path="/" component={Home} />
        <div className="flex flex-col items-center h-screen">
          <Switch>
            <Route
              exact
              path="/reverse/sentences"
              component={ReverseSentence}
            />
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
