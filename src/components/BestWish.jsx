import React from "react";
import "../scss/BestWish.scss";
import {
  disableScroll,
  enableScroll,
} from "../global/globalJs/DisableToTop.js";
import BestWishData from "../json/BestWishes.json";
import { LightBox, OpenLightbox } from "./LightBox";
import ImagePreviewer from "./ImagePreviewer/ImagePreviewer";

function BestWish() {
  const Horizontal_ = () => {
    const wrapper = document.querySelector(".best_wishes_wrapper");
    const body = document.querySelector("body");
    wrapper.addEventListener("wheel", (evt) => {
      wrapper.scrollLeft += evt.deltaY * 10;
      // HERE: wrapper.firstChild.clientWidth == document.querySelector("best_wishes_inner");
      setTimeout(() => {
        if (
          wrapper.scrollLeft > 0 &&
          wrapper.scrollLeft < wrapper.firstChild.clientWidth - body.offsetWidth
        ) {
          disableScroll(wrapper);
        } else {
          enableScroll(wrapper);
        }
      }, 200);
    });
  };

  return (
    <div className="best_wishes_wrapper ">
      <div
        className="best_wishes_inner center_left"
        onMouseEnter={() => Horizontal_()}
      >
        {BestWishData.map((details, index) => {
          if (index + 1 <= 15) {
            if (index + 1 < 10) {
              return (
                <div className="Wish_detail center_left" key={index}>
                  <Square
                    wishes={details.wishes}
                    page={`0${index + 1}`}
                    name={details.name}
                    signature={details.signature}
                  />
                </div>
              );
            } else {
              return (
                <div className="Wish_detail center_left" key={index}>
                  <Square
                    wishes={details.wishes}
                    page={index + 1}
                    name={details.name}
                    signature={details.signature}
                  />
                </div>
              );
            }
          }
        })}

        {BestWishData.length > 15 ? (
          <div className="viewMore">
            <div
              className="viewMore_inner column_center_center"
              onClick={OpenLightbox}
            >
              <h1> + {BestWishData.length - 15} </h1>
              <h2> View More </h2>
            </div>
            <LightBox type={"wishes"} json={BestWishData} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export function Square(props) {
  const { wishes, page, name, signature } = props;

  return (
    <div className="best_wish y_between">
      <p>&ldquo;{wishes}&rdquo;</p>
      <span className="page">
        {page}
        <span className="split">/</span>
      </span>
      <div className="guest_signature column_center_right">
        <span>{name}</span>
        <ImagePreviewer imageUrl={signature} alt="" />
      </div>
    </div>
  );
}

export default BestWish;
