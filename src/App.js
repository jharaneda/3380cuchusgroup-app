import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import HeaderHealthJar86 from "./Components/HeaderHealthFormJar86.js/HeaderHealthJar86";
import IncidentFormJar86 from "./Components/IncidentFormJar86/IncidentFormJar86";
import NavbarJar86 from "./Components/NavbarJar86/NavbarJar86";
import ProfileFormJar86 from "./Components/ProfileFormJar86/ProfileFormJar86";
import {
  getTenantList,
  addIncident,
  getIncidentReport,
  fetchWeather,
  updateTenantProfile,
  updateHealth,
  getHealth,
  getHealthReport,
  deleteProfile
} from "./Components/ServicesJar86/starflowServicesJar86";
import WeatherWidgetJar86 from "./Components/WeatherWidgetJar86/WeatherWidgetJar86";
import emailjs from "emailjs-com";
import HealthReportJar86 from "./Components/HealthReportJar86/HealthReportJar86";

function App() {
  //states that will save all the information
  const [tenantList, setTenantList] = useState([]);
  const [healthReport, setHealthReport] = useState([])
  const [currentTenant, setCurrentTenant] = useState({
    first_name: "",
    last_name: "",
    room: "",
    floor: "",
    phone: "",
    meds_taken: "",
    comments: "",
    description: "",
    birthdate: "",
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
  const [incidentsByProfile, setIncidentsByProfile] = useState([]);
  const [currentIncident, setCurrentIncident] = useState();
  const [queryFilter, setQueryFilter] = useState({ searchBar: "" });
  const [todayDate, setTodayDate] = useState();
  const [healthChecks, setHealthCheck] = useState();
  const [healthList, setHealthList] = useState();

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
  
  useEffect(() => {
    refreshPage();
  }, []);

  //get the info from WS -> DB
  async function refreshPage() {
    setLoading(true);

    await getHealth()
      .then((json) => {
        setHealthList(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
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
      await getHealthReport()
      .then((json) => {
        setHealthReport(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
    await today();
  }

  //manage onChange of Profile Form (Tenant Profile)
  function updateProfile(e) {
    setCurrentTenant({
      ...currentTenant,
      [e.target.id]: e.target.value,
    });
  }
  //manage onChange of Incident Form (Incident Report)
  function updateIncident(e) {
    setCurrentIncident({
      ...currentIncident,
      [e.target.id]: e.target.value,
    });
  }
  //manage onChange of search bar (Health and wellness)
  function updateSearchBar(e) {
    setQueryFilter({
      ...queryFilter,
      [e.target.id]: e.target.value,
    });
  }
  //manage onChange of HealthForm (Health and wellness)
  async function updateHealthForm(e, room, _id) {
    e.preventDefault();
    setHealthCheck({
      _id: _id,
      room: room,
      date: todayDate,
      [e.target.id]: e.target.value,
    });
    await updateHealth(healthChecks);
    await refreshPage(e);
  }
  //manage onClick of each select item
  async function insertHealth() {
    await updateHealth(healthChecks);
  }

  //function that update the tenant profile information (Tenant Profile Save button)
  async function updateProfileFunciton(e) {
    e.preventDefault();
    await updateTenantProfile(currentTenant);
    await refreshPage(e);
  }
  async function deleteProfileFunction(e) {
    e.preventDefault();
    await deleteProfile(currentTenant);
    setCurrentTenant({
      _id: '',
      first_name: '',
      last_name: '',
      room: '',
      floor: '',
      phone: '',
      meds_taken: '',
      comments: '',
      description: '',
      birthdate: '',
    });
    await refreshPage();
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

  //manage onCLick of Health and wellness form "View profile" button
  function viewProfile(e, _id) {
    var roomID = _id;
    let itemIndex = tenantList.map((index) => index._id).indexOf(roomID);
    setCurrentTenant({
      _id: tenantList[itemIndex]._id,
      first_name: tenantList[itemIndex].first_name,
      last_name: tenantList[itemIndex].last_name,
      room: tenantList[itemIndex].room,
      floor: tenantList[itemIndex].floor,
      phone: tenantList[itemIndex].phone,
      meds_taken: tenantList[itemIndex].meds_taken,
      comments: tenantList[itemIndex].comments,
      description: tenantList[itemIndex].description,
      birthdate: tenantList[itemIndex].birthdate,
    });

    let room = tenantList[itemIndex].room;
    let incidentsProfile = incidents.filter((tenant) => tenant.room == room);
    
    setIncidentsByProfile(incidentsProfile);
    setQueryFilter({ searchBar: "" });
    today();
  }

  //manage the add button in Incident Report
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
    await refreshPage(e);
  }

  //filter by any field from the tenant list (Search Bar)
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
    var formatDate;
    if (date.getMonth() < 10)
      formatDate = `${date.getFullYear()}-0${
        date.getMonth() + 1
      }-${date.getDate()}`;
    else
      formatDate = `${date.getFullYear()}-${
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
                healthList={healthList}
                viewProfile={viewProfile}
                serchAction={search}
                value={queryFilter}
                update={updateSearchBar}
                updateCheck={updateHealthForm}
                healthChecks={healthChecks}
                onClick={insertHealth}
                date={todayDate}
              />
            )}
          />
          <Route
            path="/healthReport"
            exact
            render={(props) => (
              <HealthReportJar86 healthReport={healthReport} viewProfile={viewProfile}/>
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
                incidentsByProfile={incidentsByProfile}
                deleteAction={deleteProfileFunction}
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
