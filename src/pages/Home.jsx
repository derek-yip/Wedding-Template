import React from "react";
import Gallery from "../components/Gallery";
import WeddingVideo from "/videos/Wedding2.mp4";
import "../scss/Home.scss";
import Hero from "../components/Hero";
import Parallax from "../components/Parallax";

function Home() {
  return (
    <div className="locoscroll_wrapper">
      <div className="Home">
        <div className="video_wrapper">
          <video src={WeddingVideo} autoPlay loop muted></video>
        </div>
        <Gallery />
        <Hero
          firstImage={"photos/Wedding6.jpg"}
          secondImage={"photos/Wedding14.jpg"}
        />

        <Parallax
          layout="bottom_center"
          height={"80vh"}
          color="white"
          content={
            "”I fell in love with her courage, her sincerity, and her flaming self respect. And it’s these things I’d believe in, even if the whole world indulged in wild suspicions that she wasn’t all she should be. I love her and it is the beginning of everything.”"
          }
          background_img={
            "photos/Wedding8.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Home;
