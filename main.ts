function onDisplay(firstName: string, lastName: string, age?: number) {
  console.log(`${firstName} ${lastName} ${age}`);
}

onDisplay("Kishor", "Naik", 34); // Kishor Naik 34
onDisplay("Kishor", "Naik"); // Kishor Naik undefined
