import "../scss/ScrollSlider.scss";
import UseHorizontal from "../global/globalJs/UseHorizontal";
import UseVertical from "../global/globalJs/UseVertical";
import gsap from "gsap";
import Observer from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export function ScrollSlider(props) {
  gsap.registerPlugin(ScrollTrigger, Observer);
  useEffect(() => {
    if (props.direction === "horizontal") {
      UseHorizontal();
    } else if (props.direction === "verticle") {
      UseVertical();
    } else {
      console.error(
        " Component's Props either should be 'horizontal' or 'Vertical', Please try Again"
      );
    }
  });
  return <div className="slide_wrapper">{props.children}</div>;
}

export function Slides(props) {
  const { background_img, heading, content, color, page } = props;

  const styles = {
    backgroundImage: `url('${background_img}')`,
    color: color,
  };
  return (
    <div className="block">
      <div className="outer" style={styles}>
        <div className="inner column_center_left">
          <h1>{heading}</h1>

          {content.Location && content.Date && content.Time ? (
            <div className="detail">
              <p className="text">{content.text}</p>
              <div className="detail_additional">
                <p className="location_p">Location: </p>
                <span className="location">{content.Location}</span>
                <p className="date_p">Date: </p>
                <span className="date">{content.Date}</span>
                <p className="time_p">Time: </p>
                <span className="time">{content.Time}</span>
              </div>
            </div>
          ) : (
            <div className="detail">
              <p className="text">{content.text}</p>
            </div>
          )}

          <div className="page_wrapper center_right">
            <span>/</span>
            <span className="page">{page}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
