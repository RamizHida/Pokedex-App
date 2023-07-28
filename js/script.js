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

  // Add new pokemon object to pokemon array
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // Display pokemon details to UI
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let pokemonListItem = document.createElement('li');
    pokemonListItem.innerHTML = pokemon.name;

    let btn = document.createElement('button');
    btn.innerText = 'click me';
    btn.classList.add('btn');
    btn.addEventListener('click', function () {
      showDetails(pokemon);
    });

    pokemonListItem.appendChild(btn);
    pokemonList.appendChild(pokemonListItem);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
  };
})();

// Get access to pokemonList array
let pokemonListArr = pokemonRepository.getAll();

// Iterate over Pokemon array and display details
pokemonListArr.forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
