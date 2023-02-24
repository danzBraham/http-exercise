function applyDamage(damage, currentHP) {
  return new Promise((resolve) => {
    const newHP = currentHP - damage;
    setTimeout(() => {
      resolve(
        `The player with ${currentHP} hit points suffers ${damage} points of damage and has ${newHP} hit points remaining.`
      );
    }, 1000);
  });
}

async function runTest() {
  const message = await applyDamage(30, 50);
  console.log(message);
}

runTest();
