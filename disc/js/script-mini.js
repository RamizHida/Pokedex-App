let pokemonRepository = (function () {
  let e = [];
  function t() {
    return e;
  }
  function n(t) {
    e.push(t);
  }
  function o(e) {
    return fetch(e.detailsUrl)
      .then(function (e) {
        return e.json();
      })
      .then(function (t) {
        (e.imageUrl = t.sprites.front_default),
          (e.height = t.height),
          (e.types = t.types);
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  return {
    getAll: t,
    add: n,
    addListItem: function e(t) {
      let n = document.querySelector('.pokemon-list'),
        i = document.createElement('li');
      n.classList.add('list-group-item'), (i.innerText = t.name);
      let a = document.createElement('button');
      (a.innerText = 'Show Details'),
        a.setAttribute('type', 'button'),
        a.classList.add('btn'),
        a.classList.add('btn-dark'),
        a.setAttribute('data-toggle', 'modal'),
        a.setAttribute('data-target', '#pokemonModal'),
        a.addEventListener('click', function () {
          (function e(t) {
            o(t).then(function () {
              modal.showModal(t);
            });
          })(t);
        }),
        i.appendChild(a),
        n.appendChild(i);
    },
    loadList: function e() {
      return fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          e.results.forEach(function (e) {
            n({ name: e.name, detailsUrl: e.url });
          });
        })
        .catch(function (e) {
          console.error(e);
        });
    },
    loadDetails: o,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
});
let modal = {
  showModal: function e(t) {
    let n = document.querySelector('.modal-body'),
      o = document.querySelector('.modal-title');
    (o.innerText = ''), (n.innerText = '');
    let i = document.createElement('h1');
    i.innerText = t.name;
    let a = document.createElement('img');
    a.src = t.imageUrl;
    let l = document.createElement('p');
    l.innerText = 'height: ';
    let r = document.createElement('span');
    (r.innerText = t.height),
      l.appendChild(r),
      o.append(i),
      n.append(a),
      n.append(l),
      // eslint-disable-next-line no-undef
      $('#pokemonModal').modal('show');
  },
};
