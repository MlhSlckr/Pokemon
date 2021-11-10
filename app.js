const pokemonWrapper = document.querySelector(".pokemon_wrapper");
const pokeCount = 150;
const search = document.querySelector(".search");

const initPokemon = async () => {
  for (let i = 1; i <= pokeCount; i++) {
    await getPokemon(i);
  }
};

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3DF",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#d6b3ff",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#f5f5f5",
  fighting: "#e6e0d4",
  normal: "#f5f5f5",
  ice: "#e0f5ff",
};

const getPokemon = async (id) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
    });
};

initPokemon();

const createPokemon = (pokemon) => {
  pokemonWrapper.innerHTML += `
  <div class='pokemon' style="background-color:${
    colors[pokemon.types[0].type.name]
  } ;">
    <img src="${
      pokemon.sprites.other.dream_world.front_default
    }" alt="" class='img'>
    <h1 class='name'>${pokemon.species.name}</h1>
    <p class='exp'>${pokemon.base_experience}</p>
    <span class='type'>${pokemon.types[0].type.name}</span>
  </div>
  `;
};

search.addEventListener("input", (e) => {
  e.preventDefault();
  const pokemon = document.querySelectorAll(".pokemon h1");
  pokemon.forEach((box) => {
    box.parentElement.style.display = "flex";
    if (!box.innerHTML.toLowerCase().includes(search.value.toLowerCase())) {
      box.parentElement.style.display = "none";
    }
  });
});
