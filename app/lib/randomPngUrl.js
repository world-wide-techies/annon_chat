function getRandomPNGUrl(categoryName, gender) {
  const categoryToNumberOfPngs = {
    adventurous: 5,
    ambitious: 6,
    chill: 3,
    compassionate: 7,
    confident: 5,
    creative: 7,
    curious: 2,
    energetic: 4,
    friendly: 4,
    humble: 3,
    loyal: 6,
    optimistic: 4,
    outgoing: 5,
    quirkly: 7,
    spontaneous: 5,
    techsavvy: 6,
    witty: 2,
  };

  const numberOfPngs = categoryToNumberOfPngs[categoryName] || 0;
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
