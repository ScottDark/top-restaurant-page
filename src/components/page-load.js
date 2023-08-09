import createTitleH1 from "../modules/create-title-h1";
import createDescriptionPara from "../modules/create-description-para";
import createImg from "../modules/create-img";

// Image for restaurant home page.
import restImg from "/src/assets/imgs/krusty-krab.jpg";

export default function pageLoad() {
  const selectContentWrapper = document.querySelector("#content");
  const newImage = createImg(
    restImg,
    "The Krusty Krab Restaurant",
    "restaurant-img"
  );

  selectContentWrapper.appendChild(newImage);

  createTitleH1();
  createDescriptionPara();
}
