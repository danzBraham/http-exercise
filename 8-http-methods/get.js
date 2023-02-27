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

function logUsers(users) {
  for (const user of users) {
    console.log(
      `Character Name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`
    );
  }
}

const apiKey = generateKey();
const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

async function run() {
  const users = await getUser(url, apiKey);
  logUsers(users);
}

run();
