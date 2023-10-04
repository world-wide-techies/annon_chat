import { categoryToNumberOfPngs } from "./pngCategories";

function getRandomPNGUrl(categoryName, gender) {
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

const homeUrl =
  process.env.NEXT_PUBLIC_ENVIROMENT == "development"
    ? `${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}room/`
    : "https://annon-chat.vercel.app/room/";

export { getRandomPNGUrl, homeUrl };
