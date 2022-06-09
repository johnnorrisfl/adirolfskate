import React from "react"
import Subheader from "./subheader"
import Img from "./img"

const Events = () => {
  return (
    <section id="events">
      <header className="prose">
        <Subheader>Events</Subheader>
        <p>Click or tap for our latest events.</p>
      </header>
      <a
        target="_blank"
        href="https://www.facebook.com/events/518183559656227/?ref=newsfeed"
        rel="noreferrer"
      >
        <Img
          className="mt-3 shadow-md shadow-slate-400/50"
          src="/emerson.jpg"
          alt="Emerson Skateboard contest Saturday April 9th 2022"
        ></Img>
      </a>
    </section>
  )
}

export default Events
