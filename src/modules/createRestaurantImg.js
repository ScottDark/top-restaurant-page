import restImg from "/src/assets/imgs/krusty-krab.jpg";

export default function createRestaurantImg() {
  const restaurantImg = new Image();
  restaurantImg.src = restImg;
  restaurantImg.alt = "The Krusty Krab Restaurant";
  restaurantImg.classList.add("restaurant-img");

  const selectContentWrapper = document.querySelector("#content");
  selectContentWrapper.appendChild(restaurantImg);
}
