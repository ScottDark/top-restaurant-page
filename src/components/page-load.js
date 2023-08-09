import createRestaurantImg from "../modules/create-restaurant-img";
import createTitleH1 from "../modules/create-title-h1";
import createDescriptionPara from "../modules/create-description-para";

export default function pageLoad() {
  createRestaurantImg();
  createTitleH1();
  createDescriptionPara();
}
