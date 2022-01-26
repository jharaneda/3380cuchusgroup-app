// 34.207.211.81
// Service file to put all our Fetch calls
export async function getTenantList() {
  return fetch("http://34.200.225.69:8000/tenants").then((response) =>
  // return fetch("http://localhost:8000/tenants").then((response) =>
    response.json()
  );
}
export async function getHealthReport() {
  return fetch("http://34.200.225.69:8000/health/report").then((response) =>
  // return fetch("http://localhost:8000/health/report").then((response) =>
    response.json()
  );
}

export async function getIncidentReport() {
  return fetch("http://34.200.225.69:8000/incident").then((response) =>
  // return fetch("http://localhost:8000/incident").then((response) =>
    response.json()
  );
}

export async function getTodoList() {
  return fetch("http://34.200.225.69:8000/todo").then((response) =>
  // return fetch("http://localhost:8000/todo").then((response) =>
    response.json()
  );
}

export async function getHealth() {
  return fetch("http://34.200.225.69:8000/health").then((response) =>
  // return fetch("http://localhost:8000/health").then((response) =>
    response.json()
  );
}

// export async function addTodo(newTodo) {
//   const todoData = JSON.stringify(newTodo);
//   console.log("todo function");
//   console.log(todoData);
//   return fetch("http://34.207.211.81:8000/todolist", {
//     // return fetch("http://localhost:8000/todolist", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: todoData,
//   }).then((response) => response.json());
// }

export async function addIncident(newIncident) {
  const incidentData = JSON.stringify(newIncident);
  console.log(incidentData);
  return fetch("http://34.200.225.69:8000/incident", {
    // return fetch("http://localhost:8000/incident", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: incidentData,
  }).then((response) => response.json());
}

export async function updateTenantProfile(currentProfile) {
  const profileData = JSON.stringify(currentProfile);
  console.log("profileData desde services");
  console.log(profileData);
  return fetch("http://34.200.225.69:8000/tenants", {
    // return fetch("http://localhost:8000/tenants", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: profileData,
  }).then((response) => response.json());
}

export async function updateHealth(currentHealth) {
  const healthData = JSON.stringify(currentHealth);
  return fetch("http://34.200.225.69:8000/health", {
    // return fetch("http://localhost:8000/health", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: healthData,
  }).then((response) => response.json());
}

export async function fetchWeather() {
  const API_key = "462cd311fd45adffc615072fc4be6ad4";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=${API_key}&units=metric`;
  return fetch(URL).then((response) => response.json());
}

export async function deleteProfile(currentProfile) {
  const profileData = JSON.stringify(currentProfile);
  console.log("profileData")
  console.log(profileData)
  return fetch("http://34.200.225.69:8000/tenants/delete", {
    // return fetch("http://localhost:8000/tenants/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: profileData,
  }).then((response) => response.json());
}
