const heartSvg = document.getElementById("heartSvg");
const likeCount = document.getElementById("likeCount");

let count = 3459;

heartSvg.addEventListener("click", () => {
  const currentColor = heartSvg.querySelector("path").getAttribute("stroke");

  if (currentColor === "red") {
    heartSvg.querySelector("path").setAttribute("stroke", "#75838c");
    heartSvg.querySelector("path").setAttribute("fill", "none");
    count--;
  } else {
    heartSvg.querySelector("path").setAttribute("stroke", "red");
    heartSvg.querySelector("path").setAttribute("fill", "red");
    count++;
  }
  likeCount.textContent = count;
});