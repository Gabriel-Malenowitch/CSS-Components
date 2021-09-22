let divMenu = document.getElementById("list--nav");
divMenu.style.visibility = "hidden";
// divMenu.style.marginRight = `${-300}px`

function openCloseNav(){
    if(divMenu.style.visibility == "hidden"){
        // divMenu.style.marginRight = '-300px';
        // divMenu.style.display = "block";
        divMenu.style.visibility = "visible";
    }else{
        // divMenu.style.marginRight = '0px'; 
        divMenu.style.visibility = "hidden";
    }
}