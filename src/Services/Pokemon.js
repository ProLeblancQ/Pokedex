import axios from 'axios';

function GetPokemon () {
    return axios.get("https://pokeapi.co/api/v2/pokemon-species?limit=150")
}
function GetPokemonById (id) {
    return axios.get("https://pokeapi.co/api/v2/pokemon-species/"+id)
}

export default {
    GetPokemon,
    GetPokemonById
}