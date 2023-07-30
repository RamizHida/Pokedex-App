let pokemonRepository = (function () {
  // Empty Array that will store pokemon data
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

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
    btn.innerText = 'Show Details';
    btn.classList.add('btn');
    btn.addEventListener('click', function () {
      showDetails(pokemon);
    });

    pokemonListItem.appendChild(btn);
    pokemonList.appendChild(pokemonListItem);
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  // Get pokemon list
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          // Add the pokemons to pokemonList array
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Get pokemon details
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Add some details to the pokemon
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

// Iterate over Pokemon array and display details
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
