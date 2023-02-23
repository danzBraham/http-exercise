function getURL() {
  return `https://api.boot.dev/v1/courses_rest_api/learn-http/items`;
}

function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function getSettings() {
  return {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  };
}

async function getItemData(url, settings) {
  const response = await fetch(url, settings);
  return await response.json();
}

async function logItems(items) {
  for (const item of await items) {
    console.log(item.name);
  }
}

const apiKey = generateKey();
const url = getURL();
const settings = getSettings();
const items = getItemData(url, settings);
logItems(items);
