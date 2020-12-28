import { Route } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import CssBaseline from "@material-ui/core/CssBaseline";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
    </>
  );
}

export default App;
