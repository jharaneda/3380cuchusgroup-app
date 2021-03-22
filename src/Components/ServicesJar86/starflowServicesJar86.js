// Service file to put all our Fetch calls
export async function getTenantList() {
  return fetch("http://localhost:8000/tenants").then((response) =>
    response.json()
  );
}