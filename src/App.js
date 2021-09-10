import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import SavedPosts from "./Pages/SavedPosts";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/saved">
          <SavedPosts />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
