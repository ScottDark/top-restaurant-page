// Create images.
import createImg from "../modules/create-img";
import restImg from "/src/assets/imgs/krusty-krab.jpg";

// Create <h1> titles.
import createTitle from "../modules/create-title";

// Create <p> descriptions.
import createParagraph from "../modules/create-paragraph";

export default function pageLoad() {
  const selectContentWrapper = document.querySelector("#content");
  const imgAlt = "The Krusty Krab Restaurant";
  const imgClass = "restaurant-img";

  const newImage = createImg(restImg, imgAlt, imgClass);
  selectContentWrapper.appendChild(newImage);

  const newTitle = createTitle("Come Spend Your Money Here!");
  selectContentWrapper.appendChild(newTitle);

  const newRestaurantDescription =
    "The Krusty Krab is a fictional fast food restaurant in the American" +
    " animated television series SpongeBob SquarePants.It is famous for" +
    " its signature burger, the Krabby Patty, the formula to which is" +
    " a closely guarded trade secret. The restaurant was founded by" +
    "Eugene H. Krabs, who is also the owner and manager.";

  const newPara = createParagraph(newRestaurantDescription);
  selectContentWrapper.appendChild(newPara);
}
