document.getElementById("searchButton").addEventListener("click", function() {
  const price = document.getElementById("price").value;
  const purpose = document.getElementById("purpose").value;
  const fuel = document.getElementById("fuel").value;
  const safety = document.getElementById("safety").value;
  const message = document.getElementById("message");

  if (price === "" || purpose === "" || fuel === "" || safety === ""){

    let modal = document.getElementById("myModal");
  modal.style.display = "block";


  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
      message.classList.remove("hidden");
  } else {
      message.classList.add("hidden");
      searchCars(price, purpose, fuel, safety);
  }
});

function searchCars(price, purpose, fuel, safety) {
  let result = {};
  if(price === "300" && purpose === "normally" && fuel === "care" && safety === "average"){
      result.carName ="ヤリス";
      result.imageUrl =  "image/yaris.jpg";
  }else if(price === "300" &&  purpose === "leisure" && fuel === "care" && safety === "average"){
    result.carName ="シエンタ";
    result.imageUrl =  "image/sienta.jpg";
  }else if(price === "300" &&  purpose === "normally" && fuel === "care" && safety === "high"){
    result.carName ="アクア";
    result.imageUrl =  "image/sienta.jpg";
  }else if(price === "500" &&  purpose === "leisure" && fuel === "care" && safety === "high"){
    result.carName ="RAV4";
    result.imageUrl =  "image/rav4.jpg";
  }else if(price === "500" &&  purpose === "normally" && fuel === "care" && safety === "high"){
    result.carName ="HARRIER";
    result.imageUrl =  "image/harrier.jpg";
  }else if(price === "500" &&  purpose === "normally" && fuel === "care" && safety === "average"){
    result.carName ="PRIUS";
    result.imageUrl =  "image/prius.png";
  }else if(price === "700" &&  purpose === "leisure" && fuel === "dont-care" && safety === "average"){
    result.carName ="Supra";
    result.imageUrl =  "image/supra.jpg";
  }else if(price === "700" &&  purpose === "normally" && fuel === "care" && safety === "high"){
    result.carName ="CROWN";
    result.imageUrl =  "image/crown.jpg";
  }else if(price === "700" &&  purpose === "leisure" && fuel === "dont-care" && safety === "high"){
    result.carName ="RAND CRUISER";
    result.imageUrl =  "image/rand cruiser.jpg";
  }else if(price === "no-worry" &&  purpose === "leisure" && fuel === "dont-care" && safety === "high"){
    result.carName ="Century";
    result.imageUrl =  "image/century.jpg";
  }else if(price === "no-worry" &&  purpose === "normally" && fuel === "dont-care" && safety === "high"){
    result.carName ="MIRAI";
    result.imageUrl =  "image/mirai.jpg";
  }else{
    result.carName ="ごめんなさい！";
    result.imageUrl =  "image/pien.png";
  }

  displayResult(result);
}

function displayResult(result) {
  let resultContainer = document.getElementById("result");
  if (!resultContainer) {
      resultContainer = document.createElement("div");
      resultContainer.id = "result";
      const searchForm = document.getElementById("searchForm");
      searchForm.parentNode.insertBefore(resultContainer, searchForm.nextSibling);
  } else {
      resultContainer.innerHTML = "";
  }

  const title = document.createElement("h2");
  title.textContent = "あなたへのオススメ！";
  resultContainer.appendChild(title);

  const carName = document.createElement("h2");
  carName.textContent = result.carName;
  resultContainer.appendChild(carName);

  const carImage = document.createElement("img");
  carImage.src = result.imageUrl;
  carImage.alt = result.carName;
  resultContainer.appendChild(carImage);
}
