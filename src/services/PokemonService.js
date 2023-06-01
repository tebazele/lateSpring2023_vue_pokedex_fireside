import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { api, pokeApi } from "./AxiosService.js";

class PokemonService {
  async getPokemon() {
    const res = await pokeApi.get();
    logger.log(res.data);
    AppState.pokemon = res.data.results;
    AppState.previousPageUrl = res.data.previous;
    AppState.nextPageUrl = res.data.next;
  }

  async changePage(url) {
    const res = await pokeApi.get(url);
    // logger.log(res.data);
    AppState.pokemon = res.data.results;
    AppState.previousPageUrl = res.data.previous;
    AppState.nextPageUrl = res.data.next;
  }
}
export const pokemonService = new PokemonService();
