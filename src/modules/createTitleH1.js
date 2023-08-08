export default function createTitleH1() {
  const selectContentWrapper = document.querySelector("#content");

  const createH1Element = document.createElement("h1");
  const newText = document.createTextNode("Come Spend Your Money Here!");

  createH1Element.appendChild(newText);

  selectContentWrapper.appendChild(createH1Element);
}
