// Introducing Concept
// const craftingCompleteWait = 2000;
// const combiningMaterialsWait = 1000;
// const smeltingIronBarsWait = 500;
// const shapingIronWait = 1500;

// setTimeout(() => console.log("Iron Longsword Complete!"), craftingCompleteWait);
// setTimeout(() => console.log("Combining Materials..."), combiningMaterialsWait);
// setTimeout(() => console.log("Smelting Iron Bars..."), smeltingIronBarsWait);
// setTimeout(() => console.log("Shaping Iron..."), shapingIronWait);

// console.log("Firing up the forge...");

// Exercise
function getSettings() {
  return {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-KEY": "Testing",
      "Content-Type": "application/json",
    },
  };
}

async function getItemData() {
  const response = await fetch(
    "https://api.boot.dev/v1/courses_rest_api/learn-http/items",
    getSettings()
  );
  return response.json();
}

async function runTest() {
  const items = await getItemData();
  for (const item of items) {
    console.log(item);
  }
}

runTest();
