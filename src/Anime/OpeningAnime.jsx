import React from "react";
import { useEffect } from "react";
import "./OpeningAnime.scss";
import { SeperateText } from "./CustomAnime.js";
import { restart } from "../Anime/CustomAnime.js";

function OpeningAnime() {
  useEffect(() => {
    const title = document.querySelector(".bookmark_title");
    SeperateText(title);
  }, []);

  return (
    <div className="Anime_wrapper">
      <div className="FirstAnime">
        <div className="SecondAnime top_right">
          <button className="skip" onClick={restart}>
            SKIP
          </button>
          <div className="bookmark_wrapper">
            <div className="bookmark">
              <h1 className="bookmark_title">Switching // Page</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpeningAnime;
