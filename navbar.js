var underlines = document.querySelectorAll("ul.nav-links li");

underlines.forEach((underline) => {
  underline.addEventListener("click", () => {
    console.log('hello');
    document.querySelector("li.active").classList.remove("active");
    underline.classList.add("active");
  });
});