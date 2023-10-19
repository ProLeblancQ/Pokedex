import axios from 'axios';

function GetPokemonGens () {
    return axios.get("https://pokeapi.co/api/v2/generation")
}
function GetPokemonGenById (id) {
    return axios.get("https://pokeapi.co/api/v2/generation/"+id)
}

export default {
    GetPokemonGens,
    GetPokemonGenById
}