import React from "react";
import { ScrollSlider, Slides } from "../components/ScrollSlider";
import "../scss/Detail.scss";

function Mrs() {
  function NavMove(target) {
    window.onmousemove = (e) => {
      const percent = (e.clientY / window.innerHeight) * 0.2;

      target.animate(
        {
          transform: `translateY(${percent * target.offsetHeight * -1}px)`,
        },
        {
          fill: "forwards",
          duration: 10000,
        }
      );
    };
  }
  return (
    <div className="locoscroll_wrapper">
      <ScrollSlider direction={"verticle"}>
        <Slides
          background_img={"photos/slider/slide_pic_05.jpg"}
          heading={"Wedding Signing Ceremony"}
          content={{
            Date: "Thursday, August 11, 2022",
            Time: "01:00 P.M.",
            Location:
              "Hall B04, 953 Lucile Cape Hotel, Nicolasborough, Connecticut",
            text: "It's pleasured to announce our wedding signing ceremony would be started soon! We planned for a while and finally make it! We are looking forward to your participation for this!",
          }}
          page={"01"}
        />
        <Slides
          background_img={"photos/slider/slide_pic_06.jpg"}
          heading={"Rings Exchange"}
          content={{
            Date: "Thursday, August 11, 2022",
            Time: "6:00 P.M.",
            Location:
              "Hall B02 - B07, 953 Lucile Cape Hotel, Nicolasborough, Connecticut",
            text: "Formal Wedding Ceremony will be held at night! We prepared lots of delicious cuisines and beverage for all guests, hope you enjoy and witness our meaningful moments!",
          }}
          page={"02"}
        />
        <Slides
          background_img={"photos/slider/slide_pic_07.jpg"}
          heading={"Boat Party"}
          content={{
            text: "We booked a giant boat for celebrating our wedding, all of guests are invited. Feel free to contact my event holder if you're interested, all fee are covered by our family charity fund.",
          }}
          page={"03"}
        />
      </ScrollSlider>
      <div className="event_parties_wrapper">
        <div
          className="event_parties column_center_center"
          onMouseEnter={(e) => NavMove(e.target)}
        >
          <h1>Special Thanks To :</h1>
          <h1>Photography: Rachel Driskell</h1>
          <h1>Venue: Peach Creek Ranch</h1>
          <h1>Videography: Water to Wine</h1>
          <h1>Coordination: All Things Planned</h1>
          <h1>Rentals: Vestige Event Rentals</h1>
          <h1>Makeup: Naturally Flawless</h1>
          <h1>Hair: Elvia Berry</h1>
          <h1>Florals: Posh Petals</h1>
          <h1>Cake: Cakes by Blondie</h1>
          <h1>Wedding Gown: Belle Saison Bridal</h1>
          <h1>Bridal Jewelry: Kendra Scott</h1>
          <h1>Bridesmaids: Azazie</h1>
          <h1>Groom/Groomsmen: Mens Wearhouse</h1>
          <h1>DJ: Southern Style Entertainment</h1>
          <h1>Performer: Mary R Santiago</h1>
        </div>
      </div>
    </div>
  );
}

export default Mrs;
