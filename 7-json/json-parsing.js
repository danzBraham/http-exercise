function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < characters.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const apiKey = generateKey();

async function getLocations() {
  const response = await fetch(
    "https://api.boot.dev/v1/courses_rest_api/learn-http/locations",
    {
      method: "GET",
      mode: "cors",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
}

async function run() {
  const locations = await getLocations();
  console.log("Get some locations from the server:");
  let i = 1;
  for (const location of locations) {
    console.log(
      `${i++}. ${location.name}, recommended level: ${
        location.recommendedLevel
      }`
    );
  }
}

run();
