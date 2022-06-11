import React from "react"
import Subheader from "./subheader"
import Subheader3 from "./subheader3"
import Img from "./img"

const Events = () => {
  return (
    <section
      id="events"
      className="text-slate-900 prose pt-6 flex flex-col space-y-8"
    >
      <div>
        <Subheader3>Next Event</Subheader3>
        <Img
          className="shadow-md shadow-slate-400/50"
          src="/Baldwin Contest.jpg"
          alt="Emerson Skateboard contest Saturday April 9th 2022"
        ></Img>
        <div className="flex justify-start gap-x-1">
          <dt class="flex flex-initial w-20">Date</dt>
          <dd class="text-slate-900 font-semibold">Saturday June 11th, 2022</dd>
        </div>
        <div className="flex justify-start gap-x-1 mt-2">
          <dt class="flex flex-initial w-20">Location</dt>
          <dd class="text-slate-900 font-semibold">
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
          </dd>
        </div>
      </div>
      <div>
        <Subheader3>Previous Events</Subheader3>
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
