function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < characters.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const apiKey = generateKey();

async function getLocationByID(id) {
  const response = await fetch(
    `https://api.boot.dev/v1/courses_rest_api/learn-http/locations/${id}`,
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

async function updateLocationByID(id, locationObj) {
  const response = await fetch(
    `https://api.boot.dev/v1/courses_rest_api/learn-http/locations/${id}`,
    {
      method: "PUT",
      mode: "cors",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationObj),
    }
  );
  return await response.json();
}

const locationID = "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8";

async function run() {
  const location = await getLocationByID(locationID);
  console.log(
    `Location ${location.name} fetched. Data: ${JSON.stringify(location)}`
  );

  location.discovered = true;
  await updateLocationByID(locationID, location);
  console.log(`Location ${location.name} was discovered!`);

  const updatedLocation = await getLocationByID(locationID);
  console.log(
    `Location ${updatedLocation.name} fetched. Data: ${JSON.stringify(
      updatedLocation
    )}`
  );
}

run();
