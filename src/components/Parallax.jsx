import { useEffect } from "react";
import "../scss/Parallax.scss";
import React from "react";

function Parallax(props) {
  const {
    box,
    layout,
    height,
    width,
    inner_width,
    heading,
    content,
    content_font,
    background_img,
    font_size,
    color,
    padding,
    backgroundColor,
  } = props;

  const styles = {
    height: height,
    width: width,
    backgroundImage: `url('${background_img}')`,
    color: color,
    fontSize: font_size,
    padding: padding,
  };

  const Box = {
    backgroundColor: backgroundColor,
    borderRadius: "2rem",
    width: "80%",
    padding: "4rem",
    transition: "1s all ease-in-out",
  };

  const Heading_Style = {
    fontSize: "6rem",
  };

  const Content_Style = {
    width: inner_width,
    lineHeight: "2.5rem",
    color: color,
    fontSize: content_font,
  };

  useEffect(() => {
    if (box) {
      ContentHoverEffect();
    }
  });

  function ContentHoverEffect() {
    const Content_wrapper = document.querySelector(".parallax_content_wrapper"),
      original_color = "rgba(259,259,259,0.25)",
      hover_color = "rgba(259,259,259,0.8)";

    Content_wrapper.addEventListener("mouseenter", (e) => {
      Content_wrapper.style.backgroundColor = hover_color;
    });

    Content_wrapper.addEventListener("mouseleave", (e) => {
      Content_wrapper.style.backgroundColor = original_color;
    });
  }

  return (
    <div className={`parallax ${layout}`} style={styles}>
      {box ? (
        <div className={`parallax_content_wrapper `} style={Box}>
          <h1 className="box_heading" style={Heading_Style}>
            {heading}
          </h1>
          <p className="box_content" style={Content_Style}>
            {content}
          </p>
        </div>
      ) : (
        <div className={`parallax_content_wrapper `}>
          <h1 style={Heading_Style}>{heading}</h1>
          <p style={Content_Style}>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Parallax;
