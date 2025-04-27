
    const nav = document.getElementById("mainNav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.classList.remove("bg-transparent");
      nav.classList.add("bg-white");
    } else {
      nav.classList.remove("bg-white");
      nav.classList.add("bg-transparent");
    }
  });
