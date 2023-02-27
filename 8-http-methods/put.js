function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < characters.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function getUserByID(url, id, apiKey) {
  const fullURL = `${url}/${id}`;
  const response = await fetch(fullURL, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

async function updateUserByID(url, id, apiKey, data) {
  const fullURL = `${url}/${id}`;
  const response = await fetch(fullURL, {
    method: "PUT",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

function logUser(user) {
  console.log(
    `User uuid: ${user.id}, Character Name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, PVP Status: ${user.pvpEnabled}, User Name: ${user.user.name}`
  );
}

const userId = "2f8282cb-e2f9-496f-b144-c0aa4ced56db";
const apiKey = generateKey();
const baseURL = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

async function run() {
  const userData = await getUserByID(baseURL, userId, apiKey);
  logUser(userData);

  console.log(`Updating user with id: ${userId}`);
  userData.characterName = "Abraham";
  userData.level = 999;
  userData.class = "Assassin";
  userData.pvpEnabled = true;
  userData.user.name = "Zidan";
  await updateUserByID(baseURL, userId, apiKey, userData);

  const updatedUser = await getUserByID(baseURL, userId, apiKey);
  logUser(updatedUser);
}

run();
