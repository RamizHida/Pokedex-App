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
    btn.classList.add('hover');
    btn.addEventListener('click', function () {
      showDetails(pokemon);
    });

    pokemonListItem.appendChild(btn);
    pokemonList.appendChild(pokemonListItem);
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      modal.showModal(pokemon);
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

let modal = (function () {
  let pokeMonContainer = document.querySelector('.pokemon-container');
  let modalContainer = document.querySelector('.modal-container');
  let closeBtn = document.createElement('button');

  function showModal(pokemon) {
    // Prevent opening modal if modal is already opened
    if (modalContainer.getAttribute('class').includes('is-visible')) return;

    // Fade background
    pokeMonContainer.style.opacity = 0.5;

    let name = pokemon.name;
    let height = pokemon.height;
    let imgURL = pokemon.imageUrl;

    modalContainer.classList.add('is-visible');

    let pokemonName = document.createElement('h1');
    pokemonName.innerText = name;

    closeBtn.setAttribute('id', 'close-modal-btn');
    closeBtn.innerText = 'x';

    let pokemonFeatures = document.createElement('div');
    pokemonFeatures.setAttribute('id', 'pokemon-features');
    let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = 'height: ' + height;
    let pokemonImg = document.createElement('img');
    pokemonImg.src = imgURL;

    pokemonFeatures.appendChild(pokemonHeight);
    pokemonFeatures.appendChild(pokemonImg);

    modalContainer.appendChild(pokemonName);
    modalContainer.appendChild(pokemonFeatures);
    modalContainer.appendChild(closeBtn);
  }

  function hideModal() {
    // Empty modal container
    modalContainer.innerHTML = '';

    // Undo fade of background
    pokeMonContainer.style.opacity = 1;

    // Remove modal from screen
    modalContainer.classList.remove('is-visible');
  }

  // Close modal via pressing the 'x' button
  closeBtn.addEventListener('click', hideModal);

  // Close modal via pressing 'esc' key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  // Close modal via clicking outside of modal and pokemonContainer
  window.addEventListener('click', (e) => {
    if (e.target === pokeMonContainer) {
      hideModal();
    }
  });

  return {
    showModal: showModal,
    hideModal: hideModal,
  };
})();
