import { PlanetName } from '@/@core/domain/entities/planet';

const getImageUrl = (planetName: PlanetName) => {
  const name: PlanetName = planetName.toLowerCase() as PlanetName;

  const imagesId = {
    tatooine: '0000',
    naboo: '0001',
    mustafar: '0002',
    kashyyyk: '0003',
    hoth: '0004',
    endor: '0005',
    dagobah: '0006',
    coruscant: '0007',
    bespin: '0008',
    alderaan: '0009',
    kamino: '',
  };

  const hasImage = imagesId[name];
  if (!hasImage)
    return 'https://www.shareicon.net/data/512x512/2015/10/04/651089_question_512x512.png';

  return `https://cryptospro.com.br/planetas/planeta_${imagesId[name]}_${name}.png`;
};

export default getImageUrl;
