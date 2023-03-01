function generateKey() {
  const characters = "ABCDEF123456789";
  let result = "";
  for (let i = 0; i < characters.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function getItems(url) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": generateKey(),
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

async function lootTreasure(url, rarity) {
  // let limit = null;
  // if (rarity === "Common") {
  //   limit = 1;
  // } else if (rarity === "Rare") {
  //   limit = 3;
  // } else if (rarity === "Legendary") {
  //   limit = 5;
  // }
  const rarities = {
    Common: 1,
    Rare: 3,
    Legendary: 5,
  };
  const limit = rarities[rarity];
  if (!limit) {
    throw new Error("Invalid rarity provided!");
  }
  const fullURL = `${url}?sort=quality&limit=${limit}`;
  return await getItems(fullURL);
}

const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/items";

async function run() {
  const commonLoot = await lootTreasure(url, "Common");
  console.log("Looting common treasure chest...");
  for (const item of commonLoot) {
    console.log(`Acquired a ${item.name} with quality score: ${item.quality}`);
  }
  console.log("---");

  const rareLoot = await lootTreasure(url, "Rare");
  console.log("Looting rare treasure chest...");
  for (const item of rareLoot) {
    console.log(`Acquired a ${item.name} with quality score: ${item.quality}`);
  }
  console.log("---");

  console.log("Looting legendary treasure chest...");
  const legendaryLoot = await lootTreasure(url, "Legendary");
  for (const item of legendaryLoot) {
    console.log(`Acquired a ${item.name} with quality score: ${item.quality}`);
  }
}

run();
