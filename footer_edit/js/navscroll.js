
  //   const nav = document.getElementById("mainNav");

  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > 0) {
  //     nav.classList.remove("bg-transparent");
  //     nav.classList.add("bg-zinc-200");
  //   } else {
  //     nav.classList.remove("bg-zinc-200");
  //     nav.classList.add("bg-transparent");
  //   }
  // });

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNav");

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#D9D9D9";
        navbar.style.boxShadow = "2px 4px 32px 5px rgba(0, 0, 0, 0.2)";
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
    }
});
