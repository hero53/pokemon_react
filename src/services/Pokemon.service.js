import axios from "axios";

class Pokemon {
  async fetchAllPokemons() {
    try {
      const response = await axios.get("https://pokebuildapi.fr/api/v1/pokemon");
      return response.data;
    } catch (error) {
      console.error("Erreur de chargement :", error);
      return [];
    }
  }

  async pokemonById(id) {
    try {
      console.log("https://pokebuildapi.fr/api/v1/pokemon/"+id)
      
      const response = await axios.get("https://pokebuildapi.fr/api/v1/pokemon/"+id);
      return response.data;
    } catch (error) {
      console.error("Erreur de chargement :", error);
      return [];
    }
  }



}

export default new Pokemon();
