import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import HeaderHealthJar86 from "./Components/HeaderHealthFormJar86.js/HeaderHealthJar86";
import IncidentFormJar86 from "./Components/IncidentFormJar86/IncidentFormJar86";
import NavbarJar86 from "./Components/NavbarJar86/NavbarJar86";
import ProfileFormJar86 from "./Components/ProfileFormJar86/ProfileFormJar86";
import TodoListFormJar86 from "./Components/TodoListFormJar86/TodoListFormJar86";
import {
  getTenantList,
  addTodo,
} from "./Components/ServicesJar86/starflowServicesJar86";
import HealthFormJar86 from "./Components/HealthFormJar86/HealthFormJar86";

function App() {
  const [tenantList, setTenantList] = useState([]);
  const [currentTenant, setCurrentTenant] = useState();
  const [todo, setTodo] = useState({});
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

  function updateTodo(e) {
    setTodo({
      ...todo,
      [e.target.id]: e.target.value,
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

  async function addTodoFunction(e) {
    e.preventDefault();
    await addTodo(todo);
    setTodo({
      expiration_date: "",
      room_number: "",
      priority: "Choose priority",
      comments: "",
    });
    // refreshPage()
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
      <BrowserRouter>
        <NavbarJar86 />
        <Switch>
          <Route
            path="/"
            exact 
            render={(props) => (
              <HeaderHealthJar86
                {...props}
                tenants={tenantList}
                viewProfile={viewProfile}
              />
            )}
          />
          <Route path="/profile" component={ProfileFormJar86} />
          <Route path="/todolist" component={TodoListFormJar86} />
          <Route path="/incident" component={IncidentFormJar86} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
