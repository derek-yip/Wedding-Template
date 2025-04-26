import React, { useState } from "react";
import "../scss/Gallery.scss";
import { LightBox, OpenLightbox } from "./LightBox";
import GalleryData from "../json/GalleryData.json";
import ImagePreviewer from "./ImagePreviewer/ImagePreviewer";

function Gallery() {
  const [Image, setImage] = useState();

  const launch_lightbox = (e) => {
    setImage(e.target.src);
    OpenLightbox();
  };

  return (
    <div className="gallery_cover y_even">
      <div className="gallery x_even">
        <div className="gallery_side ">
          <div className="side_content column_top_center" data-aos="fade-right">
            <h1> Move on toward New Life</h1>
            <p>
              Lorem ipsum dolor sit am consectetur adipisicing elit. Voluptas,
              recusandae?
            </p>
          </div>
        </div>

        <div className="gallery_right_wrapper y_even">
          <div className="gallery_img">
            {GalleryData.map((photo, index) => (
              <div
                className="img_wrapper"
                key={index}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <ImagePreviewer
                  imageUrl={photo.link}
                  alt=""
                  className="images"
                  onClick={launch_lightbox}
                />
              </div>
            ))}
          </div>
          <LightBox path={Image} type={"image"} />

          <div className="bottom_content column_center_right">
            <div className="content_wrapper">
              <h1 data-aos="fade-left">Living in a Dream </h1>
              <p data-aos="fade-left" data-aos-delay="200">
                "I look at you and see the rest of my life in front of my eyes.
                It's amazing how one day someone walks into your life, and
                suddenly, you can't remember how you lived without them."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
