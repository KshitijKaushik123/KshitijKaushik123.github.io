let image = document.getElementById("image");

let images = ['./assets/image1.jpeg', './assets/image2.jpeg', './assets/image3.jpeg', './assets/image4.jpeg'];

let i = 0;

setInterval(function(){
  if(i>=3){
      i = i%3;
  }
  image.src = images[i];
  i++;
},2500);