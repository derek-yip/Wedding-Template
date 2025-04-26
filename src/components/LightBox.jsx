import React from "react";
import "../scss/LightBox.scss";
import { Square } from "./BestWish";
import ImagePreviewer from "./ImagePreviewer/ImagePreviewer";

function LightBox(props) {
  const Style = {
    width: "100%",
    height: "75%",
  };

  const BestwishStyle = {
    width: "100%",
    height: "100%",
  };

  if (props.type === "image" || props.type === "photo") {
    return (
      <div className="lightbox_wrapper center_center">
        <div className="lightbox center_center" style={Style}>
          <div className="lightbox_inner center_center">
            <button onClick={() => CloseLightbox()}>X</button>
            <ImagePreviewer
              imageUrl={props.path}
              alt=""
              className="center_center"
            />
          </div>
        </div>
      </div>
    );
  } else if (props.type === "wishes") {
    const BestWishData = props.json;
    return (
      <div className="lightbox_wrapper">
        <div className="lightbox" style={BestwishStyle}>
          <div className="lightbox_inner">
            <div className="bestwishes">
              {BestWishData.map((details, index) => {
                if (index + 1 < 10) {
                  return (
                    <div className="square_wrapper center_center" key={index}>
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
                    <div className="square_wrapper center_center" key={index}>
                      <Square
                        wishes={details.wishes}
                        page={index + 1}
                        name={details.name}
                        signature={details.signature}
                      />
                    </div>
                  );
                }
              })}
            </div>
            <button onClick={() => CloseLightbox()}>X</button>
          </div>
        </div>
      </div>
    );
  } else {
    console.error("Invaild type in Lightbox! Please Try Again!");
  }
}
const OpenLightbox = () => {
  const lightboxWindow = document.querySelector(".lightbox_wrapper");
  const html = document.querySelector("html");
  const header = document.querySelector(".header");
  header.classList.add("header_closed");
  lightboxWindow.classList.add("lightbox_open");
  html.style.overflow = "hidden";
};

const CloseLightbox = () => {
  const lightboxWindow = document.querySelector(".lightbox_wrapper");
  const html = document.querySelector("html");
  const header = document.querySelector(".header");
  header.classList.remove("header_closed");
  lightboxWindow.classList.remove("lightbox_open");
  html.style.overflow = "visible";
};

export { LightBox, OpenLightbox, CloseLightbox };
