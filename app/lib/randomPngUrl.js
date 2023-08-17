function getRandomPNGUrl(categoryName, numberOfPngs) {
    const randomIndex = Math.floor(Math.random() * numberOfPngs) + 1;
    const pngFileName = `${categoryName}${randomIndex}.png`;
    
    
    const pngUrl = `/assets/${categoryName}/${pngFileName}`;
    return pngUrl;
  }