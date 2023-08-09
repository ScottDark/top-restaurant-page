// Create images.
import createImg from "../modules/create-img";
import restImg from "../assets/imgs/menu.jpg";

// Create <h1> titles.
import createTitle from "../modules/create-title";

// Create <p> descriptions.
import createParagraph from "../modules/create-paragraph";

export default function pageMenu() {
  const selectContentWrapper = document.querySelector("#content");
  const imgAlt = "Krusty Krab Menu";
  const imgClass = "restaurant-img";

  const newImage = createImg(restImg, imgAlt, imgClass);
  selectContentWrapper.appendChild(newImage);

  const newTitle = createTitle(
    "I was the head chef on the SS Diarrhea - Mr. Krabs"
  );
  selectContentWrapper.appendChild(newTitle);

  const newRestaurantDescription =
    "A Krabby Patty is a veggie burger sold by the fictional restaurant the Krusty Krab in the animated television series SpongeBob SquarePants. The series' creator, Stephen Hillenburg, expressly stated that the patties do not contain any meat.";

  const newPara = createParagraph(newRestaurantDescription);
  selectContentWrapper.appendChild(newPara);
}
