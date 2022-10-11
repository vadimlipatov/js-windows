const images = () => {
  const imgPopup = document.createElement("div");
  const bigImage = document.createElement("img");
  const workSection = document.querySelector(".works");
  imgPopup.classList.add("popup");
  workSection.appendChild(imgPopup);
  imgPopup.appendChild(bigImage);
  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";

  workSection.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
      bigImage.height = "600";
      document.body.style.overflow = "hidden";
    }

    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

export default images;
