let pokemonRepository = (function () {
  // Empty Array that will store the pokemon data
  let pokemonList = [];

  // Add individual pokemon objects to a single pokemon array
  pokemonList.push(
    {
      name: 'Squirtle',
      height: '0.5',
      types: ['water'],
    },
    {
      name: 'Charizard',
      height: '1.7',
      types: ['fire', 'flying'],
    },
    {
      name: 'Jigglypuff',
      height: '0.5',
      types: ['fairy', 'normal'],
    },
    {
      name: 'Dugtrio',
      height: '.7',
      types: ['ground'],
    },
    {
      name: 'Weepinbell',
      height: '1',
      types: ['grass', 'poision'],
    }
  );

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
  };
})();

function printArrDetails(arr) {
  const isLarge = arr.height > 1.5 ? " : Wow that's big!" : '';
  document.write(`<p>${arr.name} (height: ${arr.height})${isLarge} </p>`);
}

// Get access to pokemonList array
let pokemonListArr = pokemonRepository.getAll();

// Iterate over Pokemon array and display details
pokemonListArr.forEach(printArrDetails);
