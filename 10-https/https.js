function generateKey() {
  const characters = "ABCDEF123456789";
  let result = "";
  for (let i = 0; i < characters.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function getUserByID(url, id) {
  const fullURL = `${url}/${id}`;
  const response = await fetch(fullURL, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Keu": generateKey(),
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

function logUser(user) {
  console.log(user);
}

const uuid = "2f8282cb-e2f9-496f-b144-c0aa4ced56db";
// Using https protocol
const url = "http://api.boot.dev/v1/courses_rest_api/learn-http/users";

async function run() {
  const getUser = await getUserByID(url, uuid);
  logUser(getUser);
}

run();
