// Create images.
import createImg from "../modules/create-img";
import restImg from "../assets/imgs/staff.jpg";

// Create <h1> titles.
import createTitle from "../modules/create-title";

// Create <p> descriptions.
import createParagraph from "../modules/create-paragraph";

export default function pageContact() {
  const selectContentWrapper = document.querySelector("#content");
  const imgAlt = "Krusty Krab Staff";
  const imgClass = "restaurant-img";

  const newImage = createImg(restImg, imgAlt, imgClass);
  selectContentWrapper.appendChild(newImage);

  const newTitle = createTitle(
    "Get back to work all of you! I’m not running a happy factory here!"
  );
  selectContentWrapper.appendChild(newTitle);

  const newRestaurantDescription =
    "SpongeBob SquarePants (commonly known as simply SpongeBob) is an American animated comedy television series created by marine science educator and animator Stephen Hillenburg for Nickelodeon. Address is 124 Conch Street";

  const newPara = createParagraph(newRestaurantDescription);
  selectContentWrapper.appendChild(newPara);
}
