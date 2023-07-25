// Empty Array that will store the pokemon data
let pokemonList = [];

// Pokemon objects
let squirtle = {
  name: 'Squirtle',
  height: '0.5',
  types: ['water'],
};

let charizard = {
  name: 'Charizard',
  height: '1.7',
  types: ['fire', 'flying'],
};

let jigglyPuff = {
  name: 'Jigglypuff',
  height: '0.5',
  types: ['fairy', 'normal'],
};

let dugTrio = {
  name: 'Dugtrio',
  height: '0.7',
  types: ['ground'],
};

let weepinBell = {
  name: 'Weepinbell',
  height: '1',
  types: ['grass', 'poision'],
};

// Add individual pokemon objects to a single pokemon array
pokemonList.push(squirtle, charizard, jigglyPuff, dugTrio, weepinBell);

// Display pokemon name and height to the DOM
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height < 1.5) {
    document.write(
      `${pokemonList[i].name} (height: ${pokemonList[i].height}) <br> <br>`
    );
  } else {
    document.write(
      `${pokemonList[i].name} (height: ${pokemonList[i].height}) :  Wow, that's big! <br><br>`
    );
  }
}
