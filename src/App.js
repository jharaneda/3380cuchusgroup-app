import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import HeaderHealthJar86 from "./Components/HeaderHealthFormJar86.js/HeaderHealthJar86";
import IncidentFormJar86 from "./Components/IncidentFormJar86/IncidentFormJar86";
import NavbarJar86 from "./Components/NavbarJar86/NavbarJar86";
import ProfileFormJar86 from "./Components/ProfileFormJar86/ProfileFormJar86";
import TodoListFormJar86 from "./Components/TodoListFormJar86/TodoListFormJar86";
import {
  getTenantList,
  addTodo,
  addIncident,
  getIncidentReport,
  fetchWeather,
  updateTenantProfile,
} from "./Components/ServicesJar86/starflowServicesJar86";
import WeatherWidgetJar86 from "./Components/WeatherWidgetJar86/WeatherWidgetJar86";
import emailjs from "emailjs-com";

function App() {
  //states that will save all the information
  const [tenantList, setTenantList] = useState([]);
  const [currentTenant, setCurrentTenant] = useState({
    first_name: "",
    last_name: "",
    room: "",
    floor: "",
    phone: "",
    meds_taken: "",
    comments: "",
    phsycal_description: "",
    birthdate: "",
  });
  const [todo, setTodo] = useState({});
  const [newTodo, setNewTodo] = useState({
    expiration_date: "",
    room_number: "",
    priority: "",
    comments: "",
  });
  const [incidents, setIncidents] = useState([
    {
      incident_date: "",
      incident_time: "",
      type_incident: "",
      staff_name: "",
      VPD_called: "",
      room: "",
      comments: "",
    },
  ]);
  const [currentIncident, setCurrentIncident] = useState();
  const [queryFilter, setQueryFilter] = useState({ searchBar: "" });
  const [todayDate, setTodayDate] = useState();
  const [healthChecks, setHealthCheck] = useState({
    morning_check: false,
    evening_check: false,
    night_check: false,
  });

  const [apiWeather, setApiWeather] = useState();

  const [profileInputs, setProfileInputs] = useState({
    name: true,
    lastName: true,
    room: true,
    floor: true,
    phoneNumber: true,
    birthdate: true,
    meds: true,
    comments: true,
    description: true,
  });

  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  //history no se si funciona
  // const history = useHistory();

  //useEffect
  useEffect(() => {
    refreshPage();
  }, []);

  //get the info from WS -> DB
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
    await getIncidentReport()
      .then((json) => {
        setIncidents(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
    await fetchWeather()
      .then((json) => {
        setApiWeather(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }

  //manage onChange of Todo Form
  function updateTodo(e) {
    setNewTodo({
      ...newTodo,
      [e.target.id]: e.target.value,
    });
  }
  //manage onChange of Profile Form
  function updateProfile(e) {
    setCurrentTenant({
      ...currentTenant,
      [e.target.id]: e.target.value,
    });
  }
  //manage onChange of Incident Form
  function updateIncident(e) {
    setCurrentIncident({
      ...currentIncident,
      [e.target.id]: e.target.value,
    });
  }
  //manage onChange of search bar
  function updateSearchBar(e) {
    setQueryFilter({
      ...queryFilter,
      [e.target.id]: e.target.value,
    });
  }
  //manage onChange of HealthForm
  function updateHealthForm(e) {
    console.log("update health called");
    setHealthCheck({
      ...healthChecks,
      [e.target.id]: e.target.checked,
    });
  }

  //function that update the tenant profile information
  async function updateProfileFunciton(e) {
    e.preventDefault();
    console.log("update profile was called");
    console.log(currentTenant);
    await updateTenantProfile(currentTenant);
    refreshPage();
  }

  //function that send and save the incident report by email
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        "default_service",
        "template_8m29dei",
        currentIncident,
        "user_RmfFpd8eArh23M8dsL2Aj"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    addIncidentFunction(e);
  }

  //function that load the tenant profile information
  function activateProfile(e) {
    e.preventDefault();
    setProfileInputs({
      name: false,
      lastName: false,
      room: false,
      floor: false,
      phoneNumber: false,
      birthdate: false,
      meds: false,
      comments: false,
      description: false,
    });
  }

  //manage onCLick of Health and wellness form "View profile"
  function viewProfile(e, tenantRoom) {
    // e.preventDefault();
    var roomID = tenantRoom;
    let itemIndex = tenantList.map((index) => index.room).indexOf(roomID);

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
    setQueryFilter({ searchBar: "" });
    today();
  }

  //Manage the save button of Todo Form
  async function addTodoFunction(e) {
    e.preventDefault();
    await addTodo(newTodo);
    setNewTodo({
      expiration_date: "",
      room_number: "",
      priority: "Choose priority",
      comments: "",
    });
    refreshPage();
  }

  async function addIncidentFunction(e) {
    e.preventDefault();
    await addIncident(currentIncident);
    setCurrentIncident({
      incident_date: "",
      incident_time: "",
      type_incident: "",
      staff_name: "",
      VPD_called: "",
      room: "",
      comments: "",
    });
    refreshPage();
  }

  //filter by any field from the tenant list
  function search(rows) {
    if (queryFilter.searchBar === "") return tenantList;
    else
      return rows.filter(
        (row) =>
          row.first_name.toLowerCase().indexOf(queryFilter.searchBar) > -1 ||
          row.last_name.toLowerCase().indexOf(queryFilter.searchBar) > -1 ||
          row.room.toString().indexOf(queryFilter.searchBar) > -1 ||
          row.birthdate.toLowerCase().indexOf(queryFilter.searchBar) > -1
      );
  }

  //get today date
  function today() {
    var date = new Date();
    if (date.getMonth() < 10)
      var formatDate = `${date.getFullYear()}-0${
        date.getMonth() + 1
      }-${date.getDate()}`;
    else
      var formatDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
    setTodayDate(formatDate);
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
                tenants={search(tenantList)}
                viewProfile={viewProfile}
                serchAction={search}
                value={queryFilter}
                update={updateSearchBar}
                updateCheck={updateHealthForm}
                healthChecks={healthChecks}
              />
            )}
          />
          <Route
            path="/profile"
            exact
            render={(props) => (
              <ProfileFormJar86
                curreTenant={currentTenant}
                update={updateProfile}
                profileInputs={profileInputs}
                activateProfile={activateProfile}
                saveAction={updateProfileFunciton}
              />
            )}
          />
          <Route
            path="/todolist"
            exact
            render={(props) => (
              <TodoListFormJar86
                {...props}
                update={updateTodo}
                addAction={addTodoFunction}
                currentTodo={newTodo}
              />
            )}
          />
          <Route
            path="/incident"
            exact
            render={(props) => (
              <IncidentFormJar86
                update={updateIncident}
                currentIncident={currentIncident}
                date={todayDate}
                incidents={incidents}
                addAction={addIncidentFunction}
                sendEmail={sendEmail}
              />
            )}
          />
          <Route
            path="/weather"
            exact
            render={(props) => <WeatherWidgetJar86 apiWeather={apiWeather} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
