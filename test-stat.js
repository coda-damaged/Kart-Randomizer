const characters = [
    { name: ["Baby Peach", "Baby Daisy"], speed: 1, acceleration: 4, weight: 0, handling: 10, traction: 5, miniTurbo: 5, invincibility: 6 },
    { name: ["Baby Rosalina", "Lemmy"], speed: 1, acceleration: 5, weight: 0, handling: 9, traction: 3, miniTurbo: 5, invincibility: 6 }
  ];
  
  const karts = [
    { name: ["Biddybuggy", "Mr. Scooty"], speed: 0, acceleration: 7, weight: 0, handling: 5, traction: 4, miniTurbo: 7, invincibility: 0 }
  ];
  
  const tires = [
    { name: ["Roller", "Azure Roller"], speed: 0, acceleration: 6, weight: 0, handling: 4, traction: 4, miniTurbo: 6, invincibility: 0 }
  ];
  
  const gliders = [
    { name: ["Cloud Glider", "Parachute", "Flower Glider", "Paper Glider"], speed: 0, acceleration: 2, weight: 0, handling: 1, traction: 1, miniTurbo: 2, invincibility: 0 }
  ];
  

  const selectedCharacter = characters.find(character => character.name.includes("Baby Rosalina"));
  const selectedKart = karts.find(kart => kart.name.includes("Biddybuggy"));
  const selectedTire = tires.find(tire => tire.name.includes("Roller"));
  const selectedGlider = gliders.find(glider => glider.name.includes("Cloud Glider"));
  

  const speedLevel = selectedCharacter.speed + selectedKart.speed + selectedTire.speed + selectedGlider.speed;
  

  const speedValue = (speedLevel + 3) / 4;

  

  console.log(`Speed Level: ${speedLevel}`);
  console.log(`Speed Value: ${speedValue}`);
  
  //--------------------------------
    
      const accelerationLevel = selectedCharacter.acceleration + selectedKart.acceleration + selectedTire.acceleration + selectedGlider.acceleration;
  
    
      const accelerationValue = (accelerationLevel + 3) / 4;

      

      console.log(`Acceleration Level: ${accelerationLevel}`);
      console.log(`Acceleration Value: ${accelerationValue}`);

    //--------------------------------

      const handlingLevel = selectedCharacter.handling + selectedKart.handling + selectedTire.handling + selectedGlider.handling;
  

      const handlingValue = (handlingLevel + 3) / 4;

      
  
      console.log(`Handling Level: ${handlingLevel}`);
      console.log(`Handling Value: ${handlingValue}`);