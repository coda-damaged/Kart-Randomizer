//ill lable these at some point
const kartFolder = '/assets/kart/';
const tiresFolder = '/assets/tires/';
const gliderFolder = '/assets/glider/';
const characterFolder = '/assets/character/';

const kartImageCount = 41;    
const tiresImageCount = 22;    
const gliderImageCount = 15;    
const characterImageCount = 48;   


function getRandomImage(folder, imageCount) {
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;  
    return `${folder}image${randomIndex}.webp`; 
}


function displayRandomImages() {
    const randomizerImages = document.getElementById('randomizer-images');
    randomizerImages.innerHTML = `
        <img src="${getRandomImage(kartFolder, kartImageCount)}" alt="Random Kart">
        <img src="${getRandomImage(tiresFolder, tiresImageCount)}" alt="Random Tires">
        <img src="${getRandomImage(gliderFolder, gliderImageCount)}" alt="Random Glider">
    `;
}


function displayRandomCharacter() {
    const characterImageDiv = document.getElementById('character-image');
    const randomCharacterImage = getRandomImage(characterFolder, characterImageCount);  
    characterImageDiv.innerHTML = `<img src="${randomCharacterImage}" alt="Random Character">`;
}


displayRandomImages();


document.getElementById('character-button').addEventListener('click', displayRandomCharacter);
document.getElementById('combo-button').addEventListener('click', displayRandomImages);
