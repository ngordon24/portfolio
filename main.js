const body = document.querySelector("body");
const lightBtn = document.getElementById("btn");
let change = true;
function lightMode() {
  if (body.style.backgroundColor == "#090b0c") {
    body.style.backgroundColor = "#D3D3D3";
  } else {
    body.style.backgroundColor = "#090b0c";
  }
}
lightBtn.addEventListener("click", function () {
  if (body.classList[0] === "body") {
    body.classList.remove("body");
    body.classList.add("body2");
  } else {
    body.classList.remove("body2");
    body.classList.add("body");
  }
});
