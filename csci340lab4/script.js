$(document).ready(function() {

    $('#pokemon-button').click(function () {
        getPokemon();
    });
    $('#fact-button').click(function () {
        getFact();
    });
    $('#pokemon-fact').click(function () {
        getPokemon();
        getFact();
    });


function getPokemon() {
  const randomId = Math.floor(Math.random() * 151) + 1;
  $.ajax({
    dataType: "json",
    url: "https://pokeapi.co/api/v2/pokemon/" + randomId,
    success: function (results) {
        const pokemonName = results.name.charAt(0).toUpperCase() + results.name.slice(1).toLowerCase();
        $('#pokemonResult').html(`
            <img src="${results.sprites.front_default}" alt="${pokemonName}">
            <h2>${pokemonName}</h2>
        `);
    },
    error: function (xhr, status, error) {
      console.log(error);
      $('#pokemonResult').text("Failed to load pokemon.");
    }
  });
}

function getFact() {
  $.ajax({
    dataType: "json",
    url: "https://uselessfacts.jsph.pl/random.json?language=en",
    success: function (results) {
      $('#factResult').text(results.text);
    },
    error: function (xhr, status, error) {
      console.log(error);
      $('#factResult').text("Failed to load fact.");
    }
  });
}
});