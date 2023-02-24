// function getRandomBool() {
//   return Math.random() < 0.5;
// }

// // Concept
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (getRandomBool()) {
//       resolve("resolved!");
//     } else {
//       reject("rejected!");
//     }
//   }, 1000);
// })
//   .then((message) => {
//     console.log(`The promise finally ${message}`);
//   })
//   .catch((message) => {
//     console.log(`The promise got ${message}`);
//   });

// Exercise
const applyDamage = (damage, currentHP) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newHP = currentHP - damage;
      if (newHP <= 0) {
        reject(
          `The player suffers ${damage} points of damage and has fallen unconcious`
        );
      } else {
        resolve(
          `The player suffers ${damage} points of damage and has ${newHP} HP remaining`
        );
      }
    }, 1000);
  });
};

function runApplyDamageTest(damage, currentHP) {
  console.log(`Applying ${damage} damage to player with ${currentHP} HP...`);
  applyDamage(damage, currentHP)
    .then((message) => {
      console.log(`...applyDamage resolved with: ${message}`);
    })
    .catch((message) => {
      console.log(`...applyDamage rejected with: ${message}`);
    });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runTests() {
  runApplyDamageTest(27, 50);
  await sleep(1100);
  runApplyDamageTest(50, 50);
  await sleep(1100);
  runApplyDamageTest(110, 100);
  await sleep(1100);
}

runTests();
