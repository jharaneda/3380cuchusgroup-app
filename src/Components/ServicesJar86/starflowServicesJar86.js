// Service file to put all our Fetch calls
export async function getTenantList() {
  return fetch("http://localhost:8000/tenants").then((response) =>
    response.json()
  );
}

export async function getIncidentReport() {
  return fetch("http://localhost:8000/incident").then((response) =>
    response.json()
  );
}

export async function getTodoList() {
  return fetch("http://localhost:8000/todo").then((response) =>
    response.json()
  );
}

export async function getHealth() {
  return fetch("http://localhost:8000/health").then((response) =>
    response.json()
  );
}

export async function addTodo(newTodo) {
  const todoData = JSON.stringify(newTodo);
  console.log("todo function")
  console.log(todoData)
  return fetch("http://localhost:8000/todolist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: todoData,
  }).then((response) => response.json());
}

export async function addIncident(newIncident) {
  const incidentData = JSON.stringify(newIncident);
  console.log(incidentData)
  return fetch("http://localhost:8000/incident", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: incidentData,
  }).then((response) => response.json());
}
