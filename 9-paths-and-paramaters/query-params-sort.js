function generateKey() {
  const characters = "ABCDEF123456789";
  let result = "";
  for (let i = 0; i < characters.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function getUsers(url) {
  const fullURL = `${url}?sort=level`;
  const response = await fetch(fullURL, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": generateKey(),
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

const baseURL = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

async function run() {
  const users = await getUsers(baseURL);
  let i = 1;
  for (const user of users) {
    console.log(`${i++}. ${user.characterName} -> level: ${user.level}`);
  }
}

run();
