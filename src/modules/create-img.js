export default function createImg(imgSrc, imgAlt, ...imgClassesArr) {
  const newImage = new Image();
  newImage.src = imgSrc;
  newImage.alt = imgAlt;

  for (const arg of imgClassesArr) {
    newImage.classList.add(arg);
  }

  return newImage;
}
