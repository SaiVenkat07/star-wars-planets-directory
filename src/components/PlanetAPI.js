const BASE_URL = 'https://swapi.dev/api/';

const PlanetAPI = {
  getPlanets: async (page) => {
    const response = await fetch(`${BASE_URL}planets/?page=${page}`);
    if (!response.ok) {
      throw new Error(`Error fetching planets: ${response.statusText}`);
    }
    return response.json();
  },

  getResidents: async (planetName) => {
    const response = await fetch(`${BASE_URL}planets/?search=${planetName}`);
    if (!response.ok) {
      throw new Error(`Error fetching planet: ${response.statusText}`);
    }
    const data = await response.json();
    const planet = data.results[0]; // Assuming the first result is the planet we want
    const residentsUrls = planet.residents;
    const residentsData = await Promise.all(residentsUrls.map(url => fetch(url).then(res => res.json())));
    return residentsData;
  }
};

export default PlanetAPI;
