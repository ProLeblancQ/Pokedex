import axios from "axios";

function getVersions(){
    return axios.get("https://pokeapi.co/api/v2/version?limit=100")
}

function getVersionsById(id){
    return axios.get("https://pokeapi.co/api/v2/version/"+id)
}
function getGroupesById(id){
    return axios.get("https://pokeapi.co/api/v2/version-group/"+id)
}
function getGenerationsById(id){
    return axios.get("https://pokeapi.co/api/v2/generation/"+id)
}


export default {
    getVersions,
    getVersionsById,
    getGroupesById,
    getGenerationsById
}