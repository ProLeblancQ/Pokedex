import axios from 'axios';

function GetPokemon () {
    return axios.get("https://pokeapi.co/api/v2/pokemon")
}

export default {
    GetPokemon,
}