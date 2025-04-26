import "../scss/PhotoWrapper.scss";
import { SlideRight, SlideOut } from "../Anime/CustomAnime";

function PhotoWrapper(props) {
  const {
    position,
    photo,
    heading,
    height,
    margin,
    transform,
    backgroundColor,
    wrapper_padding,
    color,
  } = props;

  const Wrapper_style = {
    padding: wrapper_padding,
  };

  const Inner_style = {
    height: height,
    margin: margin,
    backgroundColor: backgroundColor,
  };

  const photoStyle = {
    transform: transform,
    background: `url('${photo}')`,
  };

  const HeadingStyle = {
    color: color,
  };

  return (
    <div className="photo_wrapper" style={Wrapper_style}>
      <div className={`photo_inner ${position}`} style={Inner_style}>
        <div
          className="photo"
          heading={heading}
          style={photoStyle}
          onMouseEnter={(e) => {
            SlideRight(e.target.nextSibling);
          }}
          onMouseLeave={(e) => {
            SlideOut(e.target.nextSibling);
          }}
        />
        <h1 className="heading" style={HeadingStyle}>
          {heading}
        </h1>
      </div>
    </div>
  );
}

export default PhotoWrapper;
