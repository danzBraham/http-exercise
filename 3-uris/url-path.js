function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function getData(url) {
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

async function logLocations(locations) {
  for (const location of await locations) {
    console.log(
      `Location: ${location.name}, Recommended Character Level: ${location.recommendedLevel}`
    );
  }
}

const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/locations";
const apiKey = generateKey();
logLocations(getData(url));
