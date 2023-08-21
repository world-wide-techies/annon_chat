function getRandomPNGUrl(categoryName, gender) {
  const categoryToNumberOfPngs = {
    adventurousFemale: 2,
    adventurousMale: 2,
    ambitiousMale: 2,
    ambitiousFemale: 4,
    chillMale: 2,
    chillFemale: 1,
    compassionateMale: 5,
    compassionateFemale: 2,
    confidentMale: 1,
    confidentFemale: 4,
    creativeMale: 5,
    creativeFemale: 2,
    curiousMale: 1,
    curiousFemale: 1,
    energeticMale: 1,
    energeticFemale: 3,
    friendlyMale: 3,
    friendlyFemale: 1,
    humbleMale: 2,
    humbleFemale: 1,
    loyalMale: 2,
    loyalFemale: 1,
    optimisticMale: 3,
    outgoingMale: 2,
    outgoingFemale: 3,
    quirklyMale: 4,
    quirklyFemale: 3,
    spontaneousMale: 2,
    spontaneousFemale: 3,
    techsavvyMale: 4,
    techsavvyFemale: 2,
    wittyFemale: 1,
    wittyMale: 1,
  };

  const numberOfPngs = categoryToNumberOfPngs[categoryName + gender] || 0;
  if (numberOfPngs === 0) {
    console.error(`No category found for: ${categoryName}`);
    return null;
  }

  const randomIndex = Math.floor(Math.random() * numberOfPngs) + 1;
  const pngFileName = `${categoryName}${gender}_${randomIndex}.png`;

  const pngUrl = `/assets/avatars/${categoryName}/${pngFileName}`;
  return pngUrl;
}

export { getRandomPNGUrl };
