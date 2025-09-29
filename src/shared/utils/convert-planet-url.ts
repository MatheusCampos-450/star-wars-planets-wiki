const convertPlanetUrl = (url: string) => {
  const planetId = url
    .replace('https://swapi.py4e.com/api/planets', '')
    .replace('/', '');

  return `/planet/${planetId}`;
};

export default convertPlanetUrl;
