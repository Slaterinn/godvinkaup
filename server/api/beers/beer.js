import beers from "~/data/beers_json.json";

export default defineEventHandler((event) => {
  return beers;
});