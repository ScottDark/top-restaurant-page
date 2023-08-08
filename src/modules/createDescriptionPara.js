export default function createDescriptionPara() {
  const selectContentWrapper = document.querySelector("#content");

  const createPara = document.createElement("p");
  const newDescriptionNode = document.createTextNode(
    "The Krusty Krab is a fictional fast food restaurant in the American" +
      " animated television series SpongeBob SquarePants.It is famous for" +
      " its signature burger, the Krabby Patty, the formula to which is" +
      " a closely guarded trade secret. The restaurant was founded by" +
      "Eugene H. Krabs, who is also the owner and manager."
  );

  createPara.appendChild(newDescriptionNode);

  selectContentWrapper.appendChild(createPara);
}
