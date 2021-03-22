import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderHealthJar86 from "./Components/HeaderHealthFormJar86.js/HeaderHealthJar86";
import IncidentFormJar86 from "./Components/IncidentFormJar86/IncidentFormJar86";
import NavbarJar86 from "./Components/NavbarJar86/NavbarJar86";
import ProfileFormJar86 from "./Components/ProfileFormJar86/ProfileFormJar86";
import TodoListFormJar86 from "./Components/TodoListFormJar86/TodoListFormJar86";

function App() {
  return (
    <div className="container">
      <Router>
        <NavbarJar86/>
          <Switch>
            <Route path='/' exact component={HeaderHealthJar86} />
            <Route path='/incident' exact component={IncidentFormJar86} />
            <Route path='/profile' exact component={ProfileFormJar86} />
            <Route path='/todolist' exact component={TodoListFormJar86} />
            <Route path='/weather' exact component={HeaderHealthJar86} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
