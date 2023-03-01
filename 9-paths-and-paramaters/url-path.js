function generateKey() {
  const characters = "ABCDEF123456789";
  let result = "";
  for (let i = 0; i < characters.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function getResources(path) {
  const fullURL = `https://api.boot.dev${path}`;
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

function logResources(resources) {
  let i = 1;
  for (const resource of resources) {
    console.log(`${i++} -> ${JSON.stringify(resource)}`);
  }
}

async function run() {
  const locations = await getResources(
    "/v1/courses_rest_api/learn-http/locations"
  );
  console.log("Locations:");
  logResources(locations);
  console.log(" --- ");

  const items = await getResources("/v1/courses_rest_api/learn-http/items");
  console.log("Items:");
  logResources(items);
  console.log(" --- ");

  const users = await getResources("/v1/courses_rest_api/learn-http/users");
  console.log("Users:");
  logResources(users);
}

run();
