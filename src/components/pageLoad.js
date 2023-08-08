import createRestaurantImg from "../modules/createRestaurantImg";
import createTitleH1 from "../modules/createTitleH1";
import createDescriptionPara from "../modules/createDescriptionPara";

export default function pageLoad() {
  createRestaurantImg();
  createTitleH1();
  createDescriptionPara();
}
