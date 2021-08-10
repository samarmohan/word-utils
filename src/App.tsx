import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { CapitalizeRandomLetters } from "./pages/CapitalizeRandomLetters";
import { Home } from "./pages/Home";
import { Navbar } from "./ui/Navbar";
import { ReverseSentence } from "./pages/ReverseSentence";
import { ReverseWords } from "./pages/ReverseWords";
import { TranslateToMorseCode } from "./pages/TranslateToMorseCode";
import { TranslateToPigLatin } from "./pages/TranslateToPigLatin";

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
              path="/translate/pig-latin"
              component={TranslateToPigLatin}
            />
            <Route
              exact
              path="/translate/morse-code"
              component={TranslateToMorseCode}
            />
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
