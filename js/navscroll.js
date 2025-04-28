
    const nav = document.getElementById("mainNav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.classList.remove("bg-transparent");
      nav.classList.add("bg-zinc-200");
    } else {
      nav.classList.remove("bg-zinc-200");
      nav.classList.add("bg-transparent");
    }
  });
