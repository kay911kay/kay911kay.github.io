
function addDom(event){
    //display image where the click is
	var x=event.clientX-50;
    var y=event.clientY-50;
    var newImage = document.createElement("img");
    newImage.setAttribute('src', 'poop.png');
    newImage.setAttribute('class', 'overlays');
	newImage.style.position = "absolute";
    newImage.style.left = x + "px";
    newImage.style.top = y + "px";
	console.log(event.clientX + "x position");
    document.body.appendChild(newImage);
  
}

document.addEventListener('click', addDom);