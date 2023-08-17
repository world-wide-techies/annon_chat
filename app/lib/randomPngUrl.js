function getRandomPNGUrl(categoryName) {
  const categoryToNumberOfPngs = {
    adventurous: 4,
    curious: 3,
  };

  const numberOfPngs = categoryToNumberOfPngs[categoryName] || 0;
  if (numberOfPngs === 0) {
    console.error(`No category found for: ${categoryName}`);
    return null;
  }

  const randomIndex = Math.floor(Math.random() * numberOfPngs) + 1;
  const pngFileName = `${categoryName}${randomIndex}.png`;

  const pngUrl = `/assets/${categoryName}/${pngFileName}`;
  return pngUrl;
}

export { getRandomPNGUrl };
