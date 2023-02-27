function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < characters.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function getUser(url, apiKey) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

async function createUser(url, apiKey, data) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

function logUsers(users) {
  for (const user of users) {
    console.log(
      `Character Name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`
    );
  }
}

const apiKey = generateKey();
const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";
const userToCreate = {
  characterName: "Abraham",
  class: "Assassin",
  level: 999,
  pvpEnabled: true,
  user: {
    name: "Zidan",
    location: "Indonesia",
    age: 18,
  },
};

async function run() {
  console.log("Retrieving user data...");
  const userDataFirst = await getUser(url, apiKey);
  logUsers(userDataFirst);
  console.log("---");

  console.log("Creating new character...");
  await createUser(url, apiKey, userToCreate);
  console.log("---");

  console.log("Retrieving user data...");
  const userDataSecond = await getUser(url, apiKey);
  logUsers(userDataSecond);
  console.log("---");
}

run();
