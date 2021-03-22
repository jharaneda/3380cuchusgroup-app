import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderHealthJar86 from "./Components/HeaderHealthFormJar86.js/HeaderHealthJar86";
import IncidentFormJar86 from "./Components/IncidentFormJar86/IncidentFormJar86";
import NavbarJar86 from "./Components/NavbarJar86/NavbarJar86";
import ProfileFormJar86 from "./Components/ProfileFormJar86/ProfileFormJar86";
import TodoListFormJar86 from "./Components/TodoListFormJar86/TodoListFormJar86";
import { getTenantList } from "./Components/ServicesJar86/starflowServicesJar86";

function App() {
  const [tenantList, setTenantList] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    refreshPage();
  }, []);

  async function refreshPage() {
    setLoading(true);

    getTenantList()
      .then((json) => {
        setTenantList(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }

  if (loading)
    return (
      <div className="alert alert-info">
        Please stand by while we connect your call....
      </div>
    );
  if (error)
    return (
      <div className="alert alert-danger">There was an error loading...</div>
    );

  return (
    <div className="container">
      <Router>
        <NavbarJar86 />
        <Switch>
          <Route
            path="/"
            render={(props) => (
              <HeaderHealthJar86 {...props} tenants={tenantList} />
            )}
          />
          <Route path="/incident" exact component={IncidentFormJar86} />
          <Route path="/profile" exact component={ProfileFormJar86} />
          <Route path="/todolist" exact component={TodoListFormJar86} />
          <Route path="/weather" exact component={HeaderHealthJar86} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
