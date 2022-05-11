import React from "react"
import Subheader from "./subheader"
import Img from "./img"

const Events = () => {
  return (
    <section id="events" class="text-slate-900/80">
      <header className="prose">
        <Subheader>Events</Subheader>
      </header>
      <h3 class="my-2">Next Event</h3>
      <Img
        className="shadow-md shadow-slate-400/50 mt-3"
        src="/Baldwin Contest.jpg"
        alt="Emerson Skateboard contest Saturday April 9th 2022"
      ></Img>
      <div className="flex justify-start gap-x-1 mt-4">
        <dt class="flex flex-initial w-20">Date</dt>
        <dd class="text-slate-900 font-semibold">Saturday June 11th, 2022</dd>
      </div>
      <div className="flex justify-start gap-x-1 mt-4">
        <dt class="flex flex-initial w-20">Location</dt>
        <dd class="text-slate-900 font-semibold">
          <p>
            850 Center St N
            <br />
            Jacksonville, FL 32234
            <br />
            <a
              target={"_blank"}
              href="https://duckduckgo.com/?q=baldwin+skatepark+address&atb=v320-1&ia=web&iaxm=places"
              rel="noreferrer"
            >
              map
            </a>
          </p>
        </dd>
      </div>

      <h3 class="mt-4 mb-2">Past Event</h3>
      <a
        target="_blank"
        href="https://www.facebook.com/events/518183559656227/?ref=newsfeed"
        rel="noreferrer"
      >
        <Img
          className="shadow-md shadow-slate-400/50 mt-3"
          src="/emerson.jpg"
          alt="Emerson Skateboard contest Saturday April 9th 2022"
        ></Img>
      </a>
    </section>
  )
}

export default Events
