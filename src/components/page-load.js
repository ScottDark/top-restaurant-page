// Create images.
import createImg from "../modules/create-img";
import restImg from "/src/assets/imgs/krusty-krab.jpg";

// Create <h1> titles.
import createTitle from "../modules/create-title";

// Create <p> descriptions.
import createDescriptionPara from "../modules/create-description-para";

export default function pageLoad() {
  const selectContentWrapper = document.querySelector("#content");
  const imgAlt = "The Krusty Krab Restaurant";
  const imgClass = "restaurant-img";

  const newImage = createImg(restImg, imgAlt, imgClass);
  selectContentWrapper.appendChild(newImage);

  const newTitle = createTitle("Come Spend Your Money Here!");
  selectContentWrapper.appendChild(newTitle);

  createDescriptionPara();
}
