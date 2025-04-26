import React from "react";
import "../scss/Story.scss";
import Parallax from "../components/Parallax";
import "../scss/Poster.scss";
import { ScrollSlider, Slides } from "../components/ScrollSlider";
import BestWish from "../components/BestWish";
import PhotoWrapper from "../components/PhotoWrapper";

function Story() {
  return (
    <div className="locoscroll_wrapper">
      <div className="layer">
        <Parallax
          box={true}
          height="100vh"
          inner_width="90%"
          content_font="1.5rem"
          layout="column_center_left"
          heading="Girl Meets Boy"
          background={"../photos/Wedding1.jpg"}
          background_img={"photos/Background/bk_01.png"}
          backgroundColor="rgba(259,259,259,0.25)"
          content={
            "It was a cold winter’s night. Justine and Cory were at a bar called Fontana’s in the Lower (lower) East Side of Manhattan, borderline Chinatown. Locking eyes from across the bar, Justine caught the faint glimmer of Cory’s ginger locks in the dim light and Cory wondered what type of Asian Justine was. He proposed at that very moment and the rest is history. Just kidding, the story is actually longer than that."
          }
        />
        <BestWish />
        <ScrollSlider direction={"horizontal"}>
          <Slides
            background_img={"photos/slider/slide_pic_01.jpg"}
            heading={"OUR STORY"}
            content={{
              text: "Once upon a time in the wicked land of NYC A ginger found an asian, a single soul become an abductee Knowing the asian could be 20 or 50, the ginger approached with great heed Thoughts of side ways row boats indeed!",
            }}
            page={"01"}
          />
          <Slides
            background_img={"photos/slider/slide_pic_02.jpg"}
            heading={"OUR STORY"}
            content={{
              text: "When I first set my sights I placed words upon her flesh She did not comply Complications of the fictitious man But I knew she would soon hold my hand.",
            }}
            page={"02"}
          />
          <Slides
            background_img={"photos/slider/slide_pic_03.jpg"}
            heading={"OUR STORY"}
            content={{
              text: "Days later, Cory friended Justine on Facebook, only to learn that she was already spoken for by another man. It was not yet their time, but months would go by and they would cross paths again at a St. Patty's Day party at Cory's apartment in Hoboken (Justine was high school friends with his roommate). Justine would find out at this party that Cory was harboring a mini polar bear named Akimbo in his bedroom. ",
            }}
            page={"03"}
          />
          <Slides
            background_img={"photos/slider/slide_pic_04.jpg"}
            heading={"OUR STORY"}
            content={{
              text: "An essential thing to know about New Yorkers and Times Square - unless we work there, we never go there. So it was with a deep curiosity for this ginger from the Midwest that Justine agreed to meet Cory at the Toys R' Us in Times Square for their first date. It turns out he just wanted to watch her hula hoop, a feat which she failed miserably.",
            }}
            page={"04"}
          />
        </ScrollSlider>
        <Parallax
          height="60vh"
          background_img="photos/Background/bk_02.png"
          content="“You are the finest, loveliest, tenderest, and most beautiful person I have ever known and even that is an understatement.”"
          layout="bottom_center"
          color="white"
        />
        <div className="photo_section">
          <PhotoWrapper
            wrapper_padding={"2rem 10rem"}
            position={"center_left"}
            heading={"This's My"}
            photo={"photos/story/photo1.jpg"}
            height={"60vh"}
            margin={"0 0 0 0"}
            color={"#5B60D9"}
          />
          <PhotoWrapper
            wrapper_padding={"0 10rem"}
            position={"center_left"}
            heading={"Lucky Day"}
            photo={"photos/story/photo2.jpg"}
            height={"50vh"}
            margin={"-20vh 0 0 10rem"}
            transform={"rotate(5deg)"}
            color={"#5FCDE3"}
          />
          <PhotoWrapper
            wrapper_padding={"0 10rem"}
            position={"center_left"}
            heading={"In My Life"}
            photo={"photos/story/photo3.jpg"}
            height={"40vh"}
            margin={"-20vh 0 2rem 20rem"}
            transform={"rotate(-5deg)"}
            color={"#5BD9CC"}
          />
        </div>
      </div>
    </div>
  );
}

export default Story;
