import React from "react";
import { useState } from "react";
import "../scss/Hero.scss";
import { SlideIn, SlideOut } from "../Anime/CustomAnime";

function Hero(props) {
  const [toggle, setToggle] = useState(true);
  const moveSlider = () => {
    const getSlider = document.querySelector(".hero_slider");
    setToggle(!toggle);
    if (toggle) {
      getSlider.style.transform = "translateX(100%)";
      getSlider.style.backgroundImage = `url('${props.secondImage}')`;
    } else {
      getSlider.style.transform = "translateX(0%)";
      getSlider.style.backgroundImage = `url('${props.firstImage}')`;
    }
  };

  return (
    <div>
      <div className="hero_wrapper">
        <div className="hero">
          <div
            className="hero_slider"
            style={{ backgroundImage: `url('${props.firstImage}')` }}
          ></div>
          <div className="arrow_wrapper x_around">
            <div className="arrow_inner x_even">
              <div className="slide_word_left">Slide</div>
              <div
                className="arrow_left"
                onClick={moveSlider}
                onMouseEnter={SlideIn}
                onMouseLeave={SlideOut}
              ></div>
            </div>

            <div
              className="arrow_inner x_even"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div
                className="arrow_right"
                onClick={moveSlider}
                onMouseEnter={SlideIn}
                onMouseLeave={SlideOut}
              ></div>
              <div className="slide_word_right">Slide</div>
            </div>
          </div>
          <div className="hero_inner column_center_center">
            <div className="content">
              <h1>Marry With Promises</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto perspiciatis debitis necessitatibus! Debitis illo est
                quam perspiciatis placeat aliquam ut recusandae, maxime hic
                adipisci veniam dolores rem. Debitis impedit odit, quibusdam
                alias molestiae eius sed non doloremque laborum animi quae?
                Error necessitatibus temporibus, similique nisi qui impedit quas
                quibusdam omnis voluptatum ullam. Natus labore a illo autem
                fugiat recusandae voluptatibus officiis, possimus excepturi
                similique cum vel dolores atque ad quo commodi, ex laborum
                numquam sint? Aliquam, cupiditate id. Assumenda animi, tempore
                quisquam quam deserunt ducimus, a minus nam similique facere
                eligendi iure iusto distinctio asperiores necessitatibus, illum
                quaerat at eum.
              </p>
            </div>
          </div>
          <div className="hero_inner column_center_center">
            <div className="content ">
              <h1 data-aos="fade-left">Marry With Promises</h1>
              <p data-aos="fade-left" data-aos-delay="200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto perspiciatis debitis necessitatibus! Debitis illo est
                quam perspiciatis placeat aliquam ut recusandae, maxime hic
                adipisci veniam dolores rem. Debitis impedit odit, quibusdam
                alias molestiae eius sed non doloremque laborum animi quae?
                Error necessitatibus temporibus, similique nisi qui impedit quas
                quibusdam omnis voluptatum ullam. Natus labore a illo autem
                fugiat recusandae voluptatibus officiis, possimus excepturi
                similique cum vel dolores atque ad quo commodi, ex laborum
                numquam sint? Aliquam, cupiditate id. Assumenda animi, tempore
                quisquam quam deserunt ducimus, a minus nam similique facere
                eligendi iure iusto distinctio asperiores necessitatibus, illum
                quaerat at eum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
