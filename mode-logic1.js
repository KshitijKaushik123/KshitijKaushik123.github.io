
var icon = document.getElementById("themeicon1");

icon.onclick = function(){
document.body.classList.toggle("light-theme");
if(document.body.classList.contains("light-theme")){
    icon.src = "./assets/sun.png";
}else{
    icon.src = "./assets/moon.png";
}
}
