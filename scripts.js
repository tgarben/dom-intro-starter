// Tyler Garben

document.getElementById("firstPara").innerHTML += "<span class='tan'>This is a new tan text</span>";

let images = document.getElementsByTagName("img");
console.log(images);

for(let image of images){
    image.width="250";
}

let ltBlueSpans = document.getElementsByClassName("light-blue");
let medBlueSpans = document.getElementsByClassName("med-blue");

for(let span of ltBlueSpans){
    span.style.color = "#7C9EA6"
}

for(let span of medBlueSpans){
    span.style.color = "#3C5E73"
}

let colors = ["#283040","#3C5E73","#7C9EA6","#D9BCA3","#F2DCC9"]

let svgs = document.querySelectorAll("#svgs svg")
console.log(svgs);

for(let i = 0; i < svgs.length; i++){
    svgs[i].style.stroke = colors[i];
}

document.querySelector(".bold").style.color = "#7C9EA6";

document.querySelector(".content_list li:first-of-type").textContent = "this is new item text";

document.querySelectorAll(".content_list li")[2].innerHTML += " <strong>Tyler Garben</strong>";

document.querySelector("#remove a").removeAttribute("hidden");