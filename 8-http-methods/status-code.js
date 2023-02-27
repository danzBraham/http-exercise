function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < characters.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function getUserCode(url, apiKey) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  return response.status;
}

const apiKey = generateKey();
const invalidID = "invalid-id";
const validID = "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8";

async function run() {
  const userFirts = await getUserCode(
    `https://api.boot.dev/v1/courses_rest_api/learn-http/users/${invalidID}`,
    apiKey
  );
  console.log(`id :${invalidID}, status code: ${userFirts}`);
  console.log("---");

  const userSecond = await getUserCode(
    `https://api.boot.dev/v1/courses_rest_api/learn-http/users/${validID}`,
    apiKey
  );
  console.log(`id :${validID}, status code: ${userSecond}`);
  console.log("---");
}

run();
