import gsap from "gsap";

export const SeperateText = (target) => {
  target.innerHTML = target.textContent.replace(/\S/g, "<span>$&</span>");
};

export const SlideIn = (target) => {
  gsap.fromTo(
    target,
    {
      opacity: 0,
      x: "100%",
      y: "-100%",
    },
    {
      opacity: 0,
      x: 0,
      y: 0,
      duration: 2,
    }
  );
};

export const SlideOut = (target) => {
  gsap.fromTo(
    target,
    {
      opacity: 1,
      x: "0%",
    },
    {
      opacity: 0,
      x: "-100%",
      duration: 2,
    }
  );
};

export const SlideRight = (target) => {
  gsap.fromTo(
    target,
    {
      opacity: 0,
      x: "-100%",
    },
    {
      opacity: 1,
      x: "0%",
      duration: 2,
    }
  );
};

export const Opening_Anime = async () => {
  disableScrolling();
  await window.scrollTo(0, 0);

  const Anime_wrapper = document.querySelector(".Anime_wrapper");
  const FirstAnime = document.querySelector(".FirstAnime");
  const SecondAnime = document.querySelector(".SecondAnime");
  const bookmark_wrapper = document.querySelector(".bookmark_wrapper");
  const h1 = document.querySelector(".bookmark h1");

  Anime_wrapper.style.display = "block";
  var OpeningAnime = gsap.timeline();
  OpeningAnime.fromTo(
    FirstAnime,
    { xPercent: -100 },
    { xPercent: 0, duration: 1 }
  )
    .fromTo(
      SecondAnime,
      { yPercent: 100, duration: 1 },
      { yPercent: 0, duration: 1 }
    )
    .fromTo(
      bookmark_wrapper,
      { yPercent: -100, duration: 1 },
      { yPercent: 0, duration: 1 }
    )
    .to(h1, {
      y: -(h1.offsetHeight - window.innerHeight),
      duration: 5,
      ease: "sine.inOut",
    })
    .to(h1, { y: 50, duration: 3 })
    // .to(bookmark_wrapper, { yPercent: 100, duration: 2 }, "-=0.5")
    .to(SecondAnime, { yPercent: -100, duration: 1 })
    .to(FirstAnime, { xPercent: 100, duration: 1, onComplete: restart });
};
export function restart() {
  const Anime_wrapper = document.querySelector(".Anime_wrapper");
  const FirstAnime = document.querySelector(".FirstAnime");
  const SecondAnime = document.querySelector(".SecondAnime");
  const bookmark_wrapper = document.querySelector(".bookmark_wrapper");
  const h1 = document.querySelector(".bookmark h1");

  Anime_wrapper.removeAttribute("style");
  FirstAnime.removeAttribute("style");
  SecondAnime.removeAttribute("style");
  bookmark_wrapper.removeAttribute("style");
  h1.removeAttribute("style");
  enableScrolling();
}
function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}
function enableScrolling() {
  window.onscroll = function () {};
}
