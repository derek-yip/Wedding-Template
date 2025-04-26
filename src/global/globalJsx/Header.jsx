import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../scss/Header.scss";
import { Opening_Anime } from "../../Anime/CustomAnime.js";

function Header() {
  useEffect(() => {
    header_hide();
  });

  return (
    <div>
      <div className="header center_right">
        <ul className="header_inner x_even">
          <li
            className="nav_item "
            onClick={() => {
              header_background();
              Opening_Anime();
            }}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className="nav_item "
            onClick={() => {
              header_background();
              Opening_Anime();
            }}
          >
            <Link to={"/Story"}>Story</Link>
          </li>
          <li
            className="nav_item "
            onClick={() => {
              header_background();
              Opening_Anime();
            }}
          >
            <Link to={"/Detail"}>Detail</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

//header further setting
function header_pop() {
  const header = document.querySelector(".header");
  header.style.transform = "translateY(-100%)";
  setTimeout(() => {
    header.style.transform = "translateY(0%)";
  }, 1000);
  return header;
}

function header_background() {
  const header = header_pop();
  if (
    window.location.pathname === "/Mr" ||
    window.location.pathname === "/Mrs"
  ) {
    setTimeout(() => {
      header.classList.add("header_converted");
    }, 1000);
  } else {
    header.classList.remove("header_converted");
  }
}

function header_hide() {
  const header = document.querySelector(".header");
  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0%)";
    }
  });
}

export default Header;
