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