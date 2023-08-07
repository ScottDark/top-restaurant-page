/* Create img Element, add alt attribute and x amount of class attributes*/
export default function createImgElement() {
  const selectContentWrapper = document.querySelector("#content");

  const imgElement = document.createElement("img");

  return selectContentWrapper.appendChild(imgElement);
}
