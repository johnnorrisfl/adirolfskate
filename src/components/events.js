import React from "react"
import Subheader from "./subheader"
import Img from "./img"
import EventCard from "./event-card"

const Events = () => {
  return (
    <section
      id="events"
      className="flex flex-col pt-6 space-y-8 prose text-slate-900"
    >
      <div>
        <Subheader>Next Event</Subheader>
        <EventCard
          location={{
            street: "186 Veterans Pkwy",
            cityStateZip: "St Johns, FL 32259",
          }}
          date={"Saturday August 6th, 2022"}
          imgUrl={
            "/Veterans 293069574_1594533060949278_134931932935797447_n.jpg"
          }
          alt="Veterans Skatepark contest Saturday August 6th 2022"
          mapUrl={"https://goo.gl/maps/HfmLEfBr2j2S4Sg68"}
        />
      </div>
      <div>
        <Subheader>Previous Events</Subheader>
        <EventCard
          location={{
            street: "850 Center St N",
            cityStateZip: "Jacksonville, FL 32234",
          }}
          date={"Saturday June 11th, 2022"}
          imgUrl={"/Baldwin Contest.jpg"}
          alt="Emerson Skateboard contest Saturday April 9th 2022"
          mapUrl={
            "https://duckduckgo.com/?q=baldwin+skatepark+address&atb=v320-1&ia=web&iaxm=places"
          }
        />
        <a
          target="_blank"
          href="https://www.facebook.com/events/518183559656227/?ref=newsfeed"
          rel="noreferrer"
        >
          <Img
            className="shadow-md shadow-slate-400/50"
            src="/emerson.jpg"
            alt="Emerson Skateboard contest Saturday April 9th 2022"
          ></Img>
        </a>
      </div>
    </section>
  )
}

export default Events
