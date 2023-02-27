function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < characters.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function getUsers(url, apiKey) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

async function logUsers(users) {
  for (const user of users) {
    console.log(
      `User uuid: ${user.id}, Character Name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`
    );
  }
}

async function deleteUserByID(url, id, apiKey) {
  const fullURL = `${url}/${id}`;
  const response = await fetch(fullURL, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

const apiKey = generateKey();
const userId = "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8";
const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

async function run() {
  const users = await getUsers(url, apiKey);
  logUsers(users);
  console.log("---");

  const userDelete = users.find((e) => e.id == userId);
  console.log(
    `Deleted user by ID: ${userDelete.id}, Character Name: ${userDelete.characterName}`
  );
  await deleteUserByID(url, userId, apiKey);
  console.log("---");

  const updatedUser = await getUsers(url, apiKey);
  logUsers(updatedUser);
  console.log("---");
}

run();
