var wrapperEle = document.body.querySelector(".wrapper");
var chrs = [
  {
    name: "Name: Optimus Prime",
    class: "Class: leader",
    afl: "Affilation: autobot",
    vehicle: "Vehicle: truck"
  },
  {
    name: "Name: Megatron",
    class: "Class: leader",
    afl: "Affilation: decepticon",
    vehicle: "Vehicle: tank"
  },
  {
    name: "Name: Bumblebee",
    class: "Class: scout",
    afl: "Affilation: autobot",
    vehicle: "Vehicle: car"
  },
  {
    name: "Name: Starscream",
    class: "Class: scout",
    afl: "Affilation: decepticon",
    vehicle: "Vehicle: plane"
  },
  {
    name: "Name: Ironhide",
    class: "Class: soldier",
    afl: "Affilation: autobot",
    vehicle: "Vehicle: truck"
  },
  {
    name: "Name: Brawl",
    class: "Class soldier",
    afl: "Affilation: decepticon",
    vehicle: "Vehicle: tank"
  }
];

function transformers(obj) {
  var pEle = document.createElement("div");
  pEle.classList.add("character");

  var pEle = document.createElement("div");
  var nEle = document.createElement("h1");
  nEle.innerHTML = obj.name;

  var cEle = document.createElement("h1");
  cEle.innerHTML = obj.class;

  var aEle = document.createElement("h1");
  aEle.innerHTML = obj.afl;

  var vEle = document.createElement("h1");
  vEle.innerHTML = obj.vehicle;
}
{
  pEle.appendChild(nEle);
  pEle.appendChild(aEle);
  wrapperEle.appendChild(pEle);
}

for (var i = 0; i < chrs.length; i++) {
  transformers(data[i]);
}