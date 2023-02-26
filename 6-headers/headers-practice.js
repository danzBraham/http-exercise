function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < characters.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function getLocationResponse(url, apiKey) {
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

async function putLocation(url, apiKey, data) {
  const response = await fetch(url, {
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

const apiKey = generateKey();
const url =
  "https://api.boot.dev/v1/courses_rest_api/learn-http/locations/52fdfc07-2182-454f-963f-5f0f9a621d72";
const newLocationData = {
  discovered: false,
  id: "52fdfc07-2182-454f-963f-5f0f9a621d72",
  name: "Bloodstone Swamp",
  recommendedLevel: 10,
};

async function run() {
  const oldLocation = await getLocationResponse(url, apiKey);
  console.log(`Got old location:`);
  console.log(
    `- name: ${oldLocation.name}, recommendedLevel: ${oldLocation.recommendedLevel}`
  );
  console.log("---");

  await putLocation(url, apiKey, newLocationData);
  console.log("Location updated!");
  console.log("---");

  const newLocation = await getLocationResponse(url, apiKey);
  console.log(`Got new location:`);
  console.log(
    `- name: ${newLocation.name}, recommendedLevel: ${newLocation.recommendedLevel}`
  );
  console.log("---");
}

run();
