import { useEffect, useState } from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderHealthJar86 from "./Components/HeaderHealthFormJar86.js/HeaderHealthJar86";
import IncidentFormJar86 from "./Components/IncidentFormJar86/IncidentFormJar86";
import NavbarJar86 from "./Components/NavbarJar86/NavbarJar86";
import ProfileFormJar86 from "./Components/ProfileFormJar86/ProfileFormJar86";
import TodoListFormJar86 from "./Components/TodoListFormJar86/TodoListFormJar86";
import { getTenantList } from "./Components/ServicesJar86/starflowServicesJar86";
import HealthFormJar86 from "./Components/HealthFormJar86/HealthFormJar86";

function App() {
  const [tenantList, setTenantList] = useState([]);
  const [currentTenant, setCurrentTenant] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    refreshPage();
  }, []);

  async function refreshPage() {
    setLoading(true);

    await getTenantList()
      .then((json) => {
        setTenantList(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }

  function viewProfile(room) {
    var roomID = room;
    let itemIndex = tenantList
      .map((index) => index.room)
      .indexOf(roomID.toString());

    setCurrentTenant({
      first_name: tenantList[itemIndex].first_name,
      last_name: tenantList[itemIndex].last_name,
      room: tenantList[itemIndex].room,
      floor: tenantList[itemIndex].floor,
      phone: tenantList[itemIndex].phone,
      meds_taken: tenantList[itemIndex].meds_taken,
      comments: tenantList[itemIndex].comments,
      phsycal_description: tenantList[itemIndex].phsycal_description,
      birthdate: tenantList[itemIndex].birthdate,
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
      {/* <Router>
        <NavbarJar86 />
        <Switch>
          <Route path="/incident" exact component={IncidentFormJar86} />
          <Route path="/profile" exact component={ProfileFormJar86} />
          <Route path="/todolist" exact component={TodoListFormJar86} />
          <Route path="/weather" exact component={TodoListFormJar86} />
          <Route
            path="/"
            render={(props) => (
              <HeaderHealthJar86
                {...props}
                tenants={tenantList}
                viewProfile={viewProfile}
              />
            )}
          />
        </Switch>
      </Router> */}
      <Router>
        <NavbarJar86 />
        <Switch>
        <Route path="/" exact component={HeaderHealthJar86} />
          <Route path="/profile" exact component={ProfileFormJar86} />
          <Route path="/todolist" exact component={TodoListFormJar86} />
          <Route path="/incident" exact component={IncidentFormJar86} />
          {/* <Route path="/weather" exact component={HeaderHealthJar86} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
